<template>
  <div class="children">
    <h3>children page</h3>
    <p>Child:{{childrendata}}</p>
    <p>Child:{{parentdata}}</p>
     <Input v-model="childdata" placeholder="Enter something..." @on-change="childToParent" clearable style="width: 200px" />
    <!-- <button @click="childToParent">child</button> -->
  </div>
</template>
<script>
export default {
  props: {
    childrendata: { type: String }
  },
  data() {
    return {
      parentdata: "parendata",
      childdata:''
    };
  },
  methods: {
    childToParent() {
        this.$emit('toparent',this.childdata)
    }
  }
};
</script>
