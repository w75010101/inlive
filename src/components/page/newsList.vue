<template>
  <div class="home">
    <swiperCom></swiperCom>
    <!--{{$store.state.nowChannel}}-->
    <div class="container">
      <mt-loadmore
        :autoFill="false"
        :top-method="loadTop"
        @top-status-change="handleTopChange"
        ref="loadTop"
      >
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="isNotLoadMoreBl"
          infinite-scroll-distance="10"
          infinite-scroll-immediate-check="false"
        >
          <transition-group
            enter-active-class="animated fadeIn"
          >
            <router-link
              to="/newsDetail"
              tag="li"
              v-for="(item,index) in newsArr"
              :key="index"
            >
              <div class="top clearfix">
                <div class="left" :style="isPicWidth(item.pic)">
                  <p class="title">{{item.title}}</p>
                </div>
                <div class="right">
                  <img :src="item.pic" class="pic">
                </div>
              </div>
              <div class="bottom clearfix">
                <span class="time">{{item.time}}</span>
                <span class="src">{{item.src}}</span>
              </div>
            </router-link>
          </transition-group>
          <li class="loading" v-if="loadingBl">
            <p></p>
          </li>
        </ul>
      </mt-loadmore>
      {{channelsInfoArr}}
    </div>
    <transition
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX"
    >
      <div class="toTop" v-if="goToTopBl" @click="goToTop">
        <img src="../../assets/img/箭头.png">
      </div>
    </transition>
  </div>
</template>
<script>
  import swiperCom from '../common/swiper.vue'
  import axios from 'axios'
  import bus from '../../bus/bus'
  export default {
    data(){
      return {
        widthStyleObj: {
          width: '65%'
        },
        newsArr: [],
        cacheManageObj: {},
        isNotLoadMoreBl: false,
        loadingBl: false,
        nowScrollY: 0,
        goToTopBl: false,
      }
    },
    methods: {
      toShowNews(channel){
        if(this.getNewsFromCache(channel) === 'done'){
          return;
        }
        this.getNewsFromServer(channel,true);
      },
      getNewsFromCache(channel){
        for(let i=0;i<this.cacheManageArr.length;i++){
          if(this.cacheManageArr[i].name === 'channel') {
            this.newsArr = this.cacheManageArr[i].content;
            return 'done'
          }
        }
        return 'next'
      },
      getNewsFromServer(channel,ifIndicatorShow){
        if(ifIndicatorShow){
          this.$indicator.open('获取新闻中...');
        }
        axios.get('/newsList?channel='+ channel).then( (data)=>{
          this.$indicator.close();
          if(data.data.ok !== 1) {
            throw new Error('请求错误，请重试。') ;
          }
          this.newsArr = data.data.msg.list;
          this.writeNewsIntoCache(channel,data.data.msg.list);
          this.$refs.loadTop.onTopLoaded();
        }).catch( (e)=>{
          this.$indicator.close();
          this.catchError(e.message);
        });
        return 'done'
      },
      writeNewsIntoCache(channelName,channelContent){
        let channelObj = {
            name:channelName,
            content: channelContent,
            startNum: 10
          };
        this.cacheManageArr.push(channelObj);
      },
      refreshNewsIntoCache(channelName,newContent){
        this.cacheManageArr[channelName].content.concat(newContent);
        this.cacheManageArr[channelName].startNum += 10
      },
      loadMore(){
        this.isNotLoadMoreBl = true;
        this.loadingBl = true;

          axios.get('/newsList?channel='+ this.nowChannel +'&start='+this.cacheManageObj[this.nowChannel].startNum ).then((data) => {
            this.loadingBl = false;
            if(data.data.ok !== 1){
              throw new Error('请求有问题，请重试。');
            }
            data.data.msg.list.forEach((item) => {
              this.newsArr.push(item);
            });
            this.refreshNewsIntoCache(this.nowChannel,data.data.msg);
            this.isNotLoadMoreBl = false;
          }).catch((err) => {
            this.loadingBl = false;
            this.catchError(err)
          })

      },
      isPicWidth (v) {
        if(v) return this.widthStyleObj
      },
      catchError(msg){
        this.$toast(msg)
      },
      checkTheTop () {
        if(window.scrollY > 300) {
          this.goToTopBl = true ;
          return;
        }
        this.goToTopBl = false;
      },
      goToTop () {
        let num = window.scrollY ;
        let timer = setInterval(() => {
          window.scrollTo(0,num);
          num -= 50;
          if(window.scrollY <= 0){
            clearInterval(timer)
          }
        },8);
      },
      loadTop () {
        this.cacheManageObj[this.nowChannel] = {
          content: "",
          startNum: "",
        };
        this.getNewsFromServer(this.nowChannel)
      },
      handleTopChange (status) {
        console.log(status)
      }
    },
    updated(){
      console.log(this.cacheManageArr)
    },
    mounted () {
      this.toShowNews(this.nowChannel);
    },
    beforeDestroy () {
      window.removeEventListener('scroll',this.checkTheTop)
    },
    components:{
      swiperCom
    },
    computed: {
      nowChannel () {
        return this.$route.params.nowChannel
      },
      channelsInfoArr () {
        return this.$store.state.channelArr
      }
    },
    watch: {
      nowChannel: function(v){
        this.toShowNews(v);
      }
    }
  }
</script>
<style scoped lang="scss">
  $backgroundColorBase : #409EFF;
  @keyframes loading {
    0% {transform: translateX(10rem)}
    50% {transform: translateX(-10rem)}
    100% {transform: translateX(10rem)}
  }
  img[src=""] {display: none}
  .home {
    margin-top: 7rem;
    .container {
      width: 96%;
      margin: 0 auto;
      ul {
        li {
          margin-top: 1.4rem;
          padding: 0.4rem;
          background: #f5f5f5;
          .top {
            .left {
              float: left;
              .title {
                font-size: 1.8rem ;
                color: #252525;
              }
            }
            .right {
              float: right;
              .pic {
                width: 10rem;
              }
            }
          }
          .bottom {
            margin-top: 1rem;
            .time {
              font-size: 1.4rem;
              float: left;
            }
            .src {
              font-size: 1.4rem;
              margin-right: 0.4rem;
              float: right;
            }
          }
        }
        .loading {
          width: 80%;
          margin: 2rem auto 4rem;
          background: #f2f2f2;
          p {
            animation: loading 1.5s infinite;
            border-radius: 100%;
            width: 2rem;
            height: 2rem;
            background: #e1e1e1;
            margin: 0 auto;
          }
        }
      }
    }
    .toTop {
      width: 3.6rem;
      height: 3.6rem;
      position: fixed;
      right: 2rem;
      bottom: 2rem;
      border: 1px $backgroundColorBase solid;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
</style>
