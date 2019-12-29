<template>
  <div id="app" class="layout">
    <router-view></router-view>
    <!-- <Layout>
      <Header :style="{position: 'fixed', width: '100%',zIndex: '100'}">
        <Menu mode="horizontal">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <router-link :to="{name:'gogoromap'}">
              <MenuItem name="1">GOGOMap</MenuItem>
            </router-link>
            <router-link :to="{name:'gogorolist'}">
              <MenuItem name="2">GOGOKeyWord</MenuItem>
            </router-link>
            <router-link :to="{name:'parent'}">
              <MenuItem name="3">parent</MenuItem>
            </router-link>

            <MenuItem name="4">Item 4</MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px 10px 0', minHeight: '500px'}">
        <router-view></router-view>
      </Content>
    </Layout> -->
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  // created(){
  //   // console.log(this.$route)
  //   window.console.log(this.$router.options.routes);
    
  // }
};
</script>


<style scoped>
.layout {
  position: relative;
  /* overflow: hidden; */
  text-align: center;
}
.layout .ivu-layout-header {
  background-color: #fff;
  padding: 0;
}
.layout .ivu-menu-horizontal.ivu-menu-light:after {
  height: 0;
}
.layout-logo {
  display: inline-block;
  width: 100px;
  height: 30px;
  background: #5b6270;
  /* border-radius: 3px; */
  /* float: left; */
  position: relative;
  bottom: 15px;
  /* left: 20px; */
}
.layout-nav {
  display: inline-block;
  /* width: 420px; */
  /* margin: 0 auto; */
  /* margin-right: 20px; */
}
</style>
