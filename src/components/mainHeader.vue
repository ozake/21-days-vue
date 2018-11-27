<template>
  <header>
        <span>21Days Habits</span>
      <div>
        <a href="#">
          <img src="@/assets/images/bt_category.png" alt="카테고리 이동"/>
        </a>
        <router-link :to="{ name: 'logout' }">
          <img src="@/assets/images/bt_login.png" alt="계정 정보 이동"/>
        </router-link>
      </div>
    </header>
</template>

<script>
export default {
  name: 'mainHeader'
}
</script>
