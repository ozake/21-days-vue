import { firebaseDb } from './config'

export default class Database {
  constructor () {
    this._db = firebaseDb
  }
  /**
   * 습관리스트 조회 메소드
   * @param {String} userId 조회할 사용자의 Id값
   */
  getHabitList (userId = '') {
    this._db.ref(`users/${userId}/habit/`).once('value')
      .then((snapshot) => {
        console.log(snapshot.val())
      })
      .catch(() => {
        alert('네트워크 상태가 좋지 못합니다. 다시시도해주세요.')
      })
  }
}
