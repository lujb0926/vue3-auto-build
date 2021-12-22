<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
console.log(store.state.count)
const addCount = () => {
  store.dispatch('increment')
}
const getData = () => {
  // axios
  //   .get('/api/v1/carousel/top/list')
  //   .then((res) => {
  //     console.log('res.data', res.data.data)
  //   })
  //   .catch((err) => {
  //     console.log('err', err)
  //   })
}
getData()
</script>

<template>
  <div>
    <h1>Home</h1>
    <div>{{ store.state.count }}</div>
    <div @click="addCount" class="add-container">
      <p class="add-text">增加store的count</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}
.add-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .add-text {
    color: rosybrown;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
