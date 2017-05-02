<template>
  <div class="topWrap">
    <div class="title"></div>
    <div class="loginWrap">
      <span>登陆</span>
      <span>注册</span>
    </div>
  </div>

 
</template>


<script>
import * as actions from '../../vuex/actions.js'


export default {
  replace: true,
  vuex:{
    getters:{
        
    },
    actions:actions
  },
  components:{
    
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

.topWrap{
  height: 40px;
  line-height: 40px;
  min-width: 835px;
  background: #f4f4f4;
  box-shadow: -1px 0px 1px #888888;
}
.title{
  display: inline-block;
  height: 100%;
  width:  520px;
  padding: 0 10px;
  border-right: 1px solid #ccc;
  background: url('../../assets/pic/logo.png');

}
.loginWrap{
  display: inline-block;
  width: 200px;
  float: right;
  margin-right: 30px;
  text-align: right;
}


</style>