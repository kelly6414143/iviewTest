<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Layout :style="{minHeight: '100vh'}">
            <Sider v-model="isCollapsed">
                <Menu :active-name="activeName" theme="dark" width="auto" :open-names="['/'+activeName.split('/')[1]]">
                  <Fragment :key="items.path" v-for="(items) in menu">
                    <!-- <router-link v-if="!items.children" :to={name:items.name}> -->
                      <MenuItem v-if="!items.children" :name="items.path" :to={name:items.name} >
                        <Icon :type="items.meta?items.meta.icon:''"></Icon>
                        <span>{{items.name}}</span>
                      </MenuItem>
                    <!-- </router-link> -->

                    <Submenu :name="items.path" v-if="items.children">
                        <template slot="title">
                            <Icon :type="items.meta?items.meta.icon:''"></Icon>
                            {{items.name}}
                        </template>
                           <!-- <router-link :to={name:items.name}> -->
                              <MenuItem :name="items.path + (item.path?item.path:'/')" 
                                :key="items.path+item.path"
                                :to={name:item.name}
                               v-for="(item) in items.children">{{item.name}}</MenuItem>
                          <!-- </router-link> -->
                          <!-- <Fragment v-if="item.children">
                            <Submenu :name="childItme.path" :key="childItme.path" v-for="childItme in item.children">
                              <template slot="title">{{childItme.name}}</template>
                                <MenuItem :name="item.path">Option 7</MenuItem>
                            </Submenu>
                          </Fragment> -->
                      </Submenu>
                  </Fragment>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <!-- <Breadcrumb :style="{margin: '16px 0'}"> -->
                        <!-- <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb> -->
                    <Card>
                        <div style="height: 600px">
                          <router-view></router-view>
                        </div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Fragment from '@/components/Fragment.vue'

export default {
  name: 'home',
  components:{
    Fragment
  },
  data () {
    return {
        isCollapsed: false
    };
  },
  // components: {
  //   HelloWorld
  // }
  created(){
    // console.log(this.$route)
    // window.console.log(this.$route);
    
  },
  computed:{
    menu(){
      return this.$router.options.routes[0].children
    },
    activeName(){
      return this.$route.fullPath
    }
  }
}
</script>
