<template>
  <div class="home">
    <main-header></main-header>
    <div class="list_header">
      <nav>
        <input type="radio" name="menu" value="" id="menu_doing" checked>
        <input type="radio" name="menu" value="" id="menu_clear">
        <label for="menu_doing"><span>Doing</span><span>5</span></label>
        <label for="menu_clear"><span>clear</span><span>2</span></label>
      </nav>
      <div class="select">
        <input type="checkbox" name="" value="" id="list_view_type">
        <label for="list_view_type">정렬 순서</label>
        <div class="list_view_type">
          <button type="button" name="button">시작일순</button>
          <button type="button" name="button">종료일순</button>
        </div>
      </div>
    </div>

    <section class="list_view_box">
      <div class="check_wrap">
        <div class="check_list_wrap">
          <div class="check_list">
            <input type="checkbox" name="" value="" id="self_dev1">
            <label for="self_dev1">영어단어 10개 외우기</label>
          </div>
          <div class="check_list2">
            <input type="checkbox" name="" value="" id="bookmark1" class="bookmark">
            <label for="bookmark1" class="bookmark"></label>
          </div>
        </div>
        <div class="check_list_wrap">
          <div class="check_list">
            <input type="checkbox" name="" value="" id="self_dev2">
            <label for="self_dev2">책 10장 읽기</label>
          </div>
          <div class="check_list2">
            <input type="checkbox" name="" value="" id="bookmark2" class="bookmark">
            <label for="bookmark2" class="bookmark"></label>
          </div>
        </div>
        <div class="check_list_wrap">
          <div class="check_list">
            <input type="checkbox" name="" value="" id="health1">
            <label for="health1">계단으로 출근하기</label>
          </div>
          <div class="check_list2">
            <input type="checkbox" name="" value="" id="bookmark3" class="bookmark">
            <label for="bookmark3" class="bookmark"></label>
          </div>
        </div>
        <div class="check_list_wrap">
          <div class="check_list">
            <input type="checkbox" name="" value="" id="health2">
            <label for="health2">하루 물 8잔 마시기</label>
          </div>
          <div class="check_list2">
            <input type="checkbox" name="" value="" id="bookmark4" class="bookmark">
            <label for="bookmark4" class="bookmark"></label>
          </div>
        </div>
        <div class="check_list_wrap">
          <div class="check_list">
            <input type="checkbox" name="" value="" id="health3">
            <label for="health3">취침 전 스트레칭</label>
          </div>
          <div class="check_list2">
            <input type="checkbox" name="" value="" id="bookmark5" class="bookmark">
            <label for="bookmark5" class="bookmark"></label>
          </div>
        </div>
      </div>
    </section>
    <button type="button" name="button" class="bt_add" @click="routerLink('addHabit')"></button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Database from '../firebase/Database.js'
import Auth from '../firebase/Auth.js'
import mainHeader from '../components/mainHeader.vue'
export default {
  name: 'Home',
  data () {
    return {
      habitData: [],
      db: new Database(),
      auth: new Auth()
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      let currentUser = this.auth.currentUserInfo()
      let uid = currentUser.uid
      this.db.getHabitList(uid)
    },
    routerLink (routeName = '') {
      if (routeName) {
        this.$router.push({ name: routeName })
      }
    }
  },
  components: {
    mainHeader
  }
}
</script>
