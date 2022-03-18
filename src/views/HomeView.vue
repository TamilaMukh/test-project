<template>
  <div class="home">
    <addBlock/>
    <calc/>
    <skillbox/>
  </div>
</template>

<script>
import calc from '@/components/Calculator-comp.vue'
import addBlock from '@/components/AddBlock.vue'
import skillbox from '@/components/skillbox.vue'


export default {
  name: 'HomeView',
  components: {
    calc, addBlock, skillbox
  }
}
</script>
