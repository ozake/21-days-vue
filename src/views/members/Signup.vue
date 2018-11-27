<template>
  <div>
    <header>
        <button type="button" name="button" class="bt_back"></button>
    </header>
    <div class="tit_style1">Sign up</div>
    <section class="input_wrap">
        <section class="input_box">
          <label for="text1">E-mail</label>
          <input type="text" v-model="email" @input="validation" placeholder="이메일을 입력해주세요">
          <p v-show="!emailValidation">이메일 형식이 올바르지 않습니다.</p>
        </section>
        <section class="input_box">
          <label for="text2">Password</label>
          <input type="password" @focus="pwCkFlag = false" v-model="password" placeholder="비밀번호를 입력해주세요">
        </section>
        <section class="input_box">
          <label for="text2">Password confirm</label>
          <input type="password" @input="pwCompare" v-model="password2" placeholder="비밀번호를 입력해주세요">
          <p v-show="!pwCkFlag">비밀번호가 일치하지 않습니다.</p>
        </section>
    </section>
    <section class="bt_wrap_hor">
        <button type="button" name="button" class="bt_blue" @click="signUp">회원가입</button>
    </section>
  </div>
</template>

<script>
import { emailValidationCk } from '../../util/index.js'
import Auth from '../../firebase/Auth.js'
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: '',
      password2: '',
      emailValidation: true,
      auth: new Auth(),
      pwCkFlag: true
    }
  },
  methods: {
    validation () {
      this.emailValidation = emailValidationCk(this.email)
    },
    signUp () {
      if (this.emailValidation && this.pwCkFlag) {
        this.auth.emailSignUp(this.email, this.password)
          .then(() => {
            alert('가입해주셔서 감사합니다. \n 이제 습관을 만들러 가볼까요?')
            this.$store.commit('login')
            this.$router.push({ name: 'home' })
          })
          .catch((err) => {
            alert(err.message)
          })
      } else {
        alert('유효하지 않은 이메일 또는 비밀번호확인이 일치 하지 않습니다. 다시 입력해주세요.')
      }
    },
    pwCompare () {
      if (this.password === this.password2) {
        this.pwCkFlag = true
      } else {
        this.pwCkFlag = false
      }
    }
  }
}
</script>
