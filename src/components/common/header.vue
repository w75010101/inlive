<template>
  <div class="header clearfix">
    <div class="top">
      <div class="box">
        <div class="photo">
          <img src="../../assets/img/photo.png">
          <p>随手拍</p>
        </div>
        <div class="nowTitle">
          <p>在现场InLive</p>
        </div>
        <router-link tag="div" to='./' class="liveCenter">
          <img src="../../assets/img/live.png">
          <p>直播</p>
        </router-link>
      </div>
    </div>
    <div class="bottom">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="(item,index) in channelsInfoArr" :key="index" class="swiper-item">
          <router-link
            :to="{name: 'newsList', params: {nowChannel: item}}" tag="p" activeClass="active"
          >
            {{item}}
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="add">
        <img src="../../assets/img/+.png" class="el-icon-plus" @click="addAndRemoveChannel($event)">
      </div>
    </div>
    <div class="newsChannelsList">
      <transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <div class="layout" v-if="showNewsChannelsBl">
          <ul class="clearfix">
            <li v-for="(item,index) in channelsInfoArr" :key="index">{{item}} ×</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import bus from '../../bus/bus'
export default {
  name: 'navBar',
  data () {
    return {
      swiperOption: {
        freeMode:true,
        slidesPerView:6,
        paginationClickable: true,
      },
      channelsInfoArr : ['头条',
            '新闻',
            '财经',
            '体育',
            '娱乐',
            '军事',
            '教育',
            '科技',
            'NBA',
            '股票',
            '星座',
            '女性',
            '健康',
            '育儿' ] ,
      showNewsChannelsBl:false,
    }
  },
  methods:{
    addAndRemoveChannel(e){
      if(this.showNewsChannelsBl){
        e.target.style.transform = 'rotate(180deg)';
        this.showNewsChannelsBl = false;
      }else {
        e.target.style.transform = 'rotate(-225deg)';
        this.showNewsChannelsBl = true;
      }
    },
    getChannelsInfoArr(){
      axios.get("newsChannels").then((data)=>{
        if(data.data.ok !== 1) throw new Error("网络可能有问题。");
        else {
          this.channelsInfoArr = data.data.msg ;
        }
      }).catch((err)=>{
        this.catchError(err.message)
      })
    },
    catchError(msg){
      this.$toast(msg)
    }
  },
  mounted(){
//    this.getChannelsInfoArr();
    this.$router.push({ name: 'newsList', params: { nowChannel: '头条' }});
    this.$store.dispatch('commitChannelArr',this.channelsInfoArr)

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $backgroundColorBase : #409EFF;
  $fontSize : 1.4rem;
  @keyframes okinaru {
    0% {transform: scale(1,1)}
    10% {transform: scale(1.2,1.2)}
    20% {transform: scale(1,1)}
  }
  @keyframes jumpAndRotate {
    0% {transform: scale(1,1)}
    25% {transform: scale(1.4,1.4)}
    50% {transform: scale(1,1)}
    75% {transform: scale(1.4,1.4)}
    100% {transform: scale(1,1)}
  }
  @keyframes routerActive {
    0% {transform: scale(1,1)}
    100% {transform: scale(1.2,1.2)}
  }
  .active {animation: routerActive .4s linear}
  .el-icon-circle-plus-outline {animation: okinaru 1s linear infinite}
  .header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 7rem;
    .top {
      width: 100%;
      height: 4.4rem;
      background: $backgroundColorBase;
      .box {
        width: 86%;
        height: 4.4rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .photo,.liveCenter {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img {
            width: 2.0rem;
            color: #fff;
          }
          p {
            font-size: 1.4rem;
            color: #fff;
          }
        }
        .nowTitle{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
        }
      }
    }
    .bottom {
       width: 100%;
       height: 2.6rem;
       position: relative;
       background: #fff;
       .swiper-box {
         width: 92%;
         margin: 0 auto 0 0;
         .swiper-item {
           height: 2.6rem;
           text-align: center;
           p {
             font-size: 1.4rem;
             line-height: 2.6rem;
           }
           .active {
             transition: .5s;
             color: red;
             transform: scale(1.2,1.2);
           }
         }
       }
       .add {
         height: 2.6rem;
         width: 8%;
         position: absolute;
         right: 0;
         top: 0;
         display: flex;
         justify-content: center;
         align-items: center;
         .el-icon-plus {
           width: 1.4rem;
           animation: jumpAndRotate 1s linear;
           transition: 1s;
         }
       }
     }
    .newsChannelsList {
      z-index: 1000;
      position: absolute;
      width: 100%;
      padding-bottom: 1rem;
      overflow: hidden;
      .layout {
        width: 100%;
        background: #fff;
        padding-top: 1rem;
        padding-bottom: 1rem;
        ul {
          width: 25.6rem;
          margin: 0 auto;
          font-size: $fontSize;
          li {
            &:nth-child(4n-3) {
              margin-left: 0;
            }
            width: $fontSize * 4;
            height: $fontSize + 1;
            border: 1px #eee solid;
            border-radius: 4px;
            float: left;
            margin-left: .8rem;
            margin-bottom: .6rem;
            text-align: center;
            background: #f5f5f5;
          }
        }
      }
    }
  }

</style>
