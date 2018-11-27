<template>
  <div>
    <sub-header></sub-header>
    <textarea name="name" rows="8" cols="80" placeholder="새로운 습관을 입력해보세요" v-model="habitName"></textarea>
    <div class="input_wrap2">
      <div class="input_box2">
        <label for="">Start</label>
        <input type="date" name="" @change="changeStartDate" :value="startDate">
      </div>
      <div class="ico_arrow"></div>
      <div class="input_box2">
        <label for="">Finish</label>
        <input type="date" name="" :value="endDate" disabled>
      </div>
    </div>
    <div class="input_wrap3">
      <div class="title">Category</div>
      <div class="input_wrap2">
        <div class="input_box3">
          <input type="radio" name="category" id="category1" :value="'건강'" v-model="category">
          <input type="radio" name="category" id="category2" :value="'저축/재테크'" v-model="category">
          <label for="category1">건강</label>
          <label for="category2">저축/재테크</label>
        </div>
        <div class="input_box3">
          <input type="radio" name="category" id="category3" :value="'다이어트'" v-model="category">
          <input type="radio" name="category" id="category4" :value="'종교'" v-model="category">
          <label for="category3">다이어트</label>
          <label for="category4">종교</label>
        </div>
        <div class="input_box3">
          <input type="radio" name="category" id="category5" :value="'자기계발'" v-model="category">
          <input type="radio" name="category" id="category6" :value="'기타'" v-model="category">
          <label for="category5">자기계발</label>
          <label for="category6">기타</label>
        </div>
      </div>
    </div>
    <button type="button" name="button" class="bt_blue bt_bottom">시작해볼까요!</button>
  </div>
</template>

<script>
import moment from 'moment'
import subHeader from '../components/subHeader.vue'
export default {
  name: 'AddHabit',
  components: {
    subHeader
  },
  data () {
    return {
      habitName: '',
      startDate: moment().format('YYYY-MM-DD'),
      habitStartDate: '',
      category: ''
    }
  },
  computed: {
    endDate () {
      return moment(this.startDate).add(21, 'days').format('YYYY-MM-DD')
    }
  },
  methods: {
    changeStartDate (e) {
      this.startDate = e.target.value
    }
  }
}
</script>
