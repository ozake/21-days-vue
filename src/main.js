import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Auth from './firebase/Auth.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (!store.state.isAuth) {
      let firebaseAuth = new Auth()
      firebaseAuth.userAuthState()
        .then((value) => {
          if (value) {
            store.commit('login')
            next()
          } else {
            next({ path: '/login' })
          }
        })
        .catch(() => {
          alert('네트워크가 불안합니다. 다시시도해주세요.')
        })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
