<template>
  <div class="swiperContent">
    <swiper class="swiper-box" :options="option">
      <swiper-slide class="swiper-item" v-for="(item,index) in arr" :key="index">
        <router-link :to="item.name" tag="div">
          <img :src="item.src" :alt="item.name">
          <div class="detail">
            <p>{{item.content}}</p>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    data(){
      return {
        option:{
          autoplay:3000,
          autoplayDisableOnInteraction:false,
          loop:true,
          pagination: '.swiper-pagination'
        },
        arr:[
          {
            content:"sdffdsdfsdfsdfsdfsd",
            name:"1",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511630414991&di=e46fb58ec7ad025ca75db086d1c1e2bb&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201607%2F28%2F20160728153744_MHfWt.jpeg"
          },
          {
            content:"sdfsfsdfsdfffffff",
            name:"2",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511630414990&di=6530f0d3ce0d088cc29d505dda913da2&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201501%2F25%2F20150125222801_UQnn2.jpeg"
          },
          {
            content:"dfsfsdfdsfsdfdsfsdfsd",
            name:"3",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511630414990&di=6cdb7d532d4bac0e94c8d2aa19c5cc19&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201604%2F08%2F20160408232128_nVBAz.jpeg"
          }
        ]
      }
    },
    methods:{

    }
  }
</script>
<style scoped lang="scss">
  $backgroundColorBase : #409EFF;
  .swiperContent{
    width: 100%;
    height: 18rem;
    .swiper-box{
      height: 18rem;
      width: 100%;
      position: relative;
      z-index: 0;
      .swiper-item{
        height: 18rem;
        img {
          width: 100%;
        }
        .detail {
          width: 100%;
          height: 3rem;
          background: rgba(0,0,0,.8);
          position: absolute;
          bottom: 0;
          text-align: center;
          p {
            color: #c5c5c5;
            font-size: 1.4rem;
            line-height: 3rem;
          }
        }
      }
    }
  }
</style>
