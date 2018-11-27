<template>
    <div>
      <header>
          <button type="button" name="button" class="bt_back"></button>
      </header>
      <div class="tit_style1">Log in</div>
      <section class="input_wrap">
          <section class="input_box">
          <label for="text1">E-mail</label>
          <input type="text" v-model="email" @focus="isError = false" @input="validation" placeholder="이메일을 입력해주세요">
          <p v-show="!emailValidation">이메일 형식이 올바르지 않습니다.</p>
          </section>
          <section class="input_box">
          <label for="text2">Password</label>
          <input type="password" @focus="isError = false" v-model="password" placeholder="비밀번호를 입력해주세요">
          </section>
      </section>
      <div v-if="isError" class="error">
          <div>다시 입력해보세요</div>
          <div>이메일 또는 비밀번호를<br>잘못 입력하셨습니다</div>
      </div>
      <section class="bt_wrap_hor">
          <router-link :to="{name: 'signup'}" tag="button" class="bt_white">회원가입</router-link>
          <!-- <button type="button" name="button" class="bt_white">회원가입</button> -->
          <button type="button" name="button" class="bt_blue" @click="emailLogin">로그인</button>
      </section>

      <section class="bt_wrap_ver_box">
          <div class="title">OR</div>
          <button type="button" name="button" class="bt_facebook">페이스북 계정으로 로그인</button>
          <button type="button" name="button" class="bt_google">구글 계정으로 로그인</button>
      </section>

      <button type="button" name="button" class="bt_gray">
          계정을 잊으셨나요?
      </button>
    </div>
</template>

<script>
import store from '../../store'
import { emailValidationCk } from '../../util/index.js'
import Auth from '../../firebase/Auth.js';
export default {
  name: 'login',
  data () {
    return {
      isError: false,
      email: '',
      password: '',
      emailValidation: true,
      auth: new Auth()
    }
  },
  methods: {
    validation () {
      this.emailValidation = emailValidationCk(this.email)
    },
    emailLogin () {
      if (this.emailValidation) {
        if (this.password) {
          this.auth.emailLogin(this.email, this.password)
          .then(() => {
            this.$store.commit('login')
            this.$router.push({ name: 'home'})
          })
          .catch(() => {
            this.isError = true
          })
        } else {
          alert('비밀번호가 입력되지 않았습니다. 올바른 비밀번호를 입력해주세요.')
        }
      } else {
        alert('이메일 형식이 올바르지 않습니다. 다시입력해주세요.')
      }
    }
  }
}
</script>
