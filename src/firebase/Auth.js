import { firebaseAuth } from './config'

export default class Auth {
  constructor () {
    this._auth = firebaseAuth
  }

  /**
   * 파이어베이스 이메일 로그인하기
   * @param {String} email
   * @param {String} pw
   * @returns {Promise}
   */
  emailLogin (email = '', pw = '') {
    return this._auth.signInWithEmailAndPassword(email, pw)
  }

  /**
   * 로그아웃하기
   * @returns {Promise}
   */
  logout () {
    return this._auth.signOut()
  }

  /**
   * 이메일, 비밀번호로 회원가입 메소드
   * @description 성공시 자동으로 로그인 처리, 에러의 경우 catch로 확인
   * @param {String} email
   * @param {String} pw
   * @returns {Promise}
   */
  emailSignUp (email = '', pw = '') {
    return this._auth.createUserWithEmailAndPassword(email, pw)
  }

  /**
   *  사용자가 로그인 상태 반환
   *  @description Promise 객체 반환, promise resolve시 Boolean 형태 반환
   *  true시 로그인 상태, false시 미로그인
   *  @returns {Promise}
   */
  async userAuthState () {
    let authState = false
    let promise = new Promise((resolve, reject) => {
      this._auth.onAuthStateChanged((user) => {
        if (user) {
          authState = true
          resolve(authState)
        } else {
          authState = false
          resolve(authState)
        }
      })
    })
    return promise
  }
  /**
   * 현재 사용자 정보를 반환
   * @returns {Object}
   */
  currentUserInfo () {
    return this._auth.currentUser
  }
}
