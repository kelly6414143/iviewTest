<template>
  <div class="hello">
    <Select v-model="listModel" style="width:200px">
        <Option v-for="(item,index) in list" :value="item.value" :key="index">{{ item.value }}</Option>
    </Select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data(){
   return{
     listModel:'',
      list:[{value:'apple'},{value:'banana'},{value:'chocolate'}]
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
