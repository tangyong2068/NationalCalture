<template>
  <div class="login-wrap">
    <topbar></topbar>
    <navibar></navibar>
  </div>
  <router-view></router-view>
  
  <div class="bottomWrap">
    bottom
  </div>
 
</template>

<script>
import * as actions from '../../vuex/actions.js'
import topbar from '../Commons/TopBar.vue'
import navibar from '../Commons/NaviBar.vue'
export default {
  replace: true,
  vuex:{
    getters:{
        
    },
    actions:actions
  },
  components:{
    topbar,
    navibar,
  },
  data(){
    return {
     
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.login-wrap{
  /*border: 1px solid red;*/
  /*height: 100%;*/
}
.bottomWrap{
  height: 50px;
  border:1px solid red;
}
</style>
