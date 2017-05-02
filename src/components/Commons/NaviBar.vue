<template>
  <div class="naviWrap">
  	<div class="naviContent">
  		<span>首页</span>
  		<span>民族节日</span>
  		<span>民族工艺</span>
  		<span>民族饮食</span>
  		<span>民族风情</span>
  		<span>民族服饰</span>
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
.naviWrap{
	margin: 2px;
	height: 80px;
	line-height: 80px;
	font-size: 17px;
	color: #666;
	/*background: url("../../assets/pic/navibg.jpg");*/
	background: #fff;
	background-size:auto;
}
.naviContent{
	width: 800px;
	margin: 0 auto;
}
.naviContent span {
    min-width: 120px;
    display: inline-block;
    text-align: center;
}
.naviContent span:hover{
	color: #f86900;
	height: 80px;
	border-bottom: 2px solid #f86900;
	cursor: pointer;
}
.naviWrap img{
	width: 100%;
	height: 160px;
}

</style>