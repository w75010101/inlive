<template>
  <div class="header clearfix">
    <div class="top">
      <div class="box">
        <div class="photo">
          <i class="el-icon-circle-plus-outline"></i>
          <p>现场</p>
        </div>
        <div class="nowTitle">
          <p>在现场InLive</p>
        </div>
        <router-link tag="div" to='./' class="liveCenter">
          <i class="el-icon-loading"></i>
          <p>直播</p>
        </router-link>
      </div>
    </div>
    <div class="bottom">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="(item,index) in arr" :key="index" class="swiper-item">
          <router-link to="./" tag="p">{{item}}</router-link>
        </swiper-slide>
      </swiper>
      <div class="add">
        <i class="el-icon-plus"></i>
      </div>
    </div>
  </div>


</template>

<script>
  import axios from "axios"
export default {

  name: 'header',
  data () {
    return {
      swiperOption: {
        freeMode:true,
        slidesPerView:6,
        paginationClickable: true,
      },
      arr :  ["头条","新闻","财经","体育","娱乐","军事","教育","科技","NBA","股票","星座","女性","健康","育儿"]
    }
  },
  mounted(){

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @keyframes okinaru {
    0% {transform: scale(1,1)}
    10% {transform: scale(1.2,1.2)}
    20% {transform: scale(1,1)}
  }
  @keyframes jumpAndRotate {
    0% {transform: scale(1,1)}
    10% {transform: scale(1.4,1.4)}
    20% {transform: scale(1,1)}
    30% {transform: scale(1.4,1.4)}
    40% {transform: scale(1,1)}
    50% {transform: scale(1.4,1.4)}
    60% {transform: scale(1,1)}
    70% {transform: scale(1.4,1.4)}
    80% {transform: scale(1,1)}
    90% {transform: scale(1.4,1.4)}
    100% {transform: scale(1,1)}
  }
  .el-icon-circle-plus-outline {animation: okinaru 4s linear infinite}
  .header {width: 100%; height: 6.8rem;}
  .top {width: 100%; height: 4.4rem; background: #409EFF; }
  .top .box {width: 86%; height: 4.4rem; margin: 0 auto;display: flex;justify-content: space-between; align-items: center;}
  .photo,.nowTitle,.liveCenter {display: flex; flex-direction: column; align-items: center;}
  .photo i,.liveCenter i{font-size: 2.4rem; color: #fff}
  .photo p,.liveCenter p{font-size: 1.4rem; color: #fff}
  .nowTitle {font-size: 1.8rem; }
  .bottom {width: 100%; height: 2.4rem; position: relative;}
  .swiper-box {width: 92%; margin: 0 auto 0 0}
  .swiper-item {height: 2.4rem;}
  .swiper-item p {font: 1.4rem/2.4rem ""; display: flex; justify-content: center; align-items: center; }
  .bottom .add {height: 2.4rem; width: 8%; position: absolute; right: 0; top: 0; display: flex; justify-content: center; align-items: center;}
    .add .el-icon-plus {animation: jumpAndRotate 4s linear}
</style>
