<template>
  <div class="parent">
    <h1>This is parent page</h1>
    <p>Parent:{{parentdata}}</p>
    <input type="text" v-model="parentdata">
    <p>parent:{{childrendata}}</p>
    <children-component :childrendata="parentdata" @toparent="toparent"></children-component>
    <selecte-list></selecte-list>
  </div>
</template>
<script>
import children from "@/components/childrent";
import selecteList from '../components/list'
export default {
  components: {
    "children-component": children,
    'selecte-list':selecteList
  },
  data() {
    return {
      parentdata: "parentdata",
      childrendata: ""
    };
  },
  created(){
    let auth =['open']
    localStorage.setItem('auth',auth)
  },
  methods: {
    toparent(data) {
      this.childrendata = data;
    }
  }
};
</script>