<template>
	<div id="frame" >
	    <div id="photos" class="play">
		    <img src="../../assets/pic/home/home-8.jpg" >
		    <img src="../../assets/pic/home/home-10.jpg" >
		    <img src="../../assets/pic/home/home-13.jpg" >
		    <img src="../../assets/pic/home/home-5.jpg" >
	    </div>
	</div>
</template>
<style scoped>
    #frame{position:absolute;width:1200px;height:340px;overflow:hidden;}
    #dis{position:absolute;left:-50px;top:-10px;opacity:.5}
   
    #photos img{float:left;width:1200px;height:340px}
    #photos {  position: absolute;z-index:9;  width: calc(1200px * 4);/*---修改图片数量的话需要修改下面的动画参数*/  }
    .play{ animation: ma 10s ease-out infinite alternate;}
    @keyframes ma {
        0%,25% {        margin-left: 0px;       }
        30%,50% {       margin-left: -1200px;    }
        55%,75% {       margin-left: -2400px;    }
        80%,100% {       margin-left: -3600px;    }

    }
</style>