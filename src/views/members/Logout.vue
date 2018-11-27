<template>
  <div>
    <header>
          <button type="button" name="button" class="bt_back" @click="backBtn"></button>
      </header>
      <div class="tit_style1">Log out</div>
      <section class="input_wrap">
          <section class="input_box">
            <label for="text1">E-mail</label>
            <p>{{userEmail}}</p>
          </section>
      </section>
      <section class="bt_wrap_hor">
          <button type="button" name="button" class="bt_white">비밀번호 변경</button>
          <button type="button" name="button" class="bt_blue" @click="userLogout">로그아웃</button>
      </section>
  </div>
</template>

<script>
  import Auth from '../../firebase/Auth.js';
  export default {
    name: 'logout',
    data () {
      return {
        userEmail: '',
        auth: new Auth()
      }
    },
    created () {
      
    },
    mounted () {
      this.$nextTick(function () {
        let currentUser = this.auth.currentUserInfo()
        this.userEmail = currentUser.email
      })
    },
    methods: {
      userLogout () {
        this.auth.logout()
          .then(() => {
            this.$store.commit('logout')
            this.$router.replace({ name: 'login' })
          })
          .catch((err) => {
            alert(err)
          })
      },
      backBtn () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>