<template>
  <div class="header clearfix">
    <div class="top">
      <div class="box">
        <div class="photo">
          <i class="el-icon-circle-plus-outline"></i>
          <p>分享</p>
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

        <swiper-slide v-for="(item,index) in arr" :key="index">
          <router-link to="./">{{item}}</router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>


</template>

<script>
export default {

  name: 'header',
  data () {
    return {
      swiperOption: {
        freeMode:true,
        slidesPerView:5,
        paginationClickable: true,
      },
      arr : [111,222,33,44,55,888,9,6,5,848,48,48,48,48,48,48,48,5]
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
    from {transform: scale(1,1)}
    to {transform: scale(1.2,1.2)}
  }
  .el-icon-circle-plus-outline {animation: okinaru 1s linear infinite}
  .header {width: 100%; height: 6.8rem;}
  .top {width: 100%; height: 4.4rem; background: red; }
  .top .box {width: 86%; height: 4.4rem; margin: 0 auto;display: flex;justify-content: space-between; align-items: center;}
  .photo,.nowTitle,.liveCenter {display: flex; flex-direction: column; align-items: center;}
  .photo i,.liveCenter i{font-size: 2.4rem;}
  .photo p,.liveCenter p{font-size: 1.4rem;}
  .nowTitle {font-size: 1.8rem; }
  .bottom {width: 100%; height: 2.4rem; background: blue}
  .swiper-item {
    height: 2.4rem;
    text-align: center;
    font-size: 18px ;
    background: #fff;
  }
</style>
