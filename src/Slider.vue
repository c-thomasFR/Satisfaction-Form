<template>
    <div>
        <div>value: {{ value }}</div>
        <vue-slider
                v-model="value"
                :data="data"
                :marks="true"
        ></vue-slider>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  components: {
    VueSlider
  },
  data: function () {
      return {
        value: 'C',
        data: ['A', 'B', 'C', 'D', 'E']
      }
    }
}
</script>