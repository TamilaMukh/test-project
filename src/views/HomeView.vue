<template>
  <div class="home">
    <addBlock/>
    <calc/>
  </div>
</template>

<script>
import calc from '@/components/Calculator-comp.vue'
import addBlock from '@/components/AddBlock.vue'

export default {
  name: 'HomeView',
  components: {
    calc, addBlock
  }
}
</script>
