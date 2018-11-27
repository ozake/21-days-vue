/**
 * email 유효성 체크 함수
 * @description 유효하지 않는 이메일이면 false, 유효하면 true
 * @param {String} val
 * @returns {Boolean}
 */
export function emailValidationCk (val = '') {
  let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  // 검증에 사용할 정규식 변수 regExp에 저장
  if (val.match(regExp) != null) {
    return true
  } else {
    return false
  }
}
