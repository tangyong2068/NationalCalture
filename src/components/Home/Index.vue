<template>
	<div class="homeWrap">
		<div class="homeSearch">
			<p>检索网站素材</p>
			<div class="searchWrap">
				<input  placeholder="输入检索关键信息">	
				<span>搜索</span>
			</div>
		</div> 

		<div class="slideshowWrap">
			<slideshow></slideshow>
		</div>
    <div class="contentWrap">
      <contentcard></contentcard>
    </div>
	</div>
</template>


<script>
import * as actions from '../../vuex/actions.js'
import slideshow from './SlideShow.vue'
import contentcard from './ContentCard.vue'

export default {
  replace: true,
  vuex:{
    getters:{
        
    },
    actions:actions
  },
  components:{
    slideshow,
    contentcard
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
.homeSearch{
	height: 160px;
	background: url("../../assets/pic/home/search-bg.jpg");

}
.homeSearch p{
	display: block;
	height: 75px;
	line-height: 75px;
	min-width: 690px;
	font-size: 36px;
    color: #ffffff;
    text-align: center;
}
.searchWrap{

	width: 690px;
	height: 50px;
	background: #fff;
	border-radius: 2px;
	margin: 0 auto;
}
.searchWrap input{
	line-height: 50px;
    height: 50px;
    font-size: 16px;
    width: 590px;
    font-family: "Microsoft YaHei";
    text-indent: 20px;
    border: 0;
    padding: 0;
    color: #bbbbbb;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
.searchWrap span{
	float: right;
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    width: 100px;
    text-align: center;
    background: #3ebb2b;
    overflow: hidden;
    font-size: 18px;
    color: #FFF;
    font-family: "Microsoft Yahei";
    border: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
.searchWrap span:hover{
	background: red;
}
.slideshowWrap{
	width: 1200px;
	height: 340px;
	margin: 0 auto;
	margin-top: 15px;
	
}
.contentWrap{
  margin-top: 15px;
  height: 400px;
  border:1px solid blue;
}
</style>