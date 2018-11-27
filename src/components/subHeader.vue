<template>
  <header>
    <button type="button" name="button" @click="backBtn" class="bt_back"></button>
  </header>
</template>

<script>
export default {
  name: 'subHeader',
  methods: {
    backBtn () {
      this.$router.back()
    }
  }
}
</script>
