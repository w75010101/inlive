<template>
  <div class="home">
    <swiperCom></swiperCom>
    <!--{{$store.state.nowChannel}}-->
    <div class="container">
      <ul>
        <transition-group
          enter-active-class="animated fadeIn"
        >
          <li v-for="(item,index) in newsArr" :key="index">
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
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>
<script>
  import swiperCom from '../common/swiper.vue'
  import axios from 'axios'
  export default {
    data(){
      return {
        widthStyleObj: {
          width: '65%'
        },
        channelListLength: 0,
        cacheManage: [],
        newsArr:[]
      }
    },
    methods: {
      toShowNews(channel){
        if(this.getNewsFromCache(channel) === 1){
          return;
        }
        this.getNewsFromServer(channel);
        console.log(this.cacheManage)
      },
      writeNewsIntoCache(channelName,channelContent){
        let channelObj = {
          channelName,
          channelContent
        };
        this.cacheManage.push(channelObj);
      },
      getNewsFromCache(channel){
        let check = 0 ;
        this.cacheManage.forEach((item, index)=>{
          if(item.channelName === channel){
            this.newsArr = item.channelContent ;
            console.log(item.channelName);
            check = 1;
            return check;
          }
        });
        return check;
      },
      getNewsFromServer(channel){
        this.$indicator.open('获取新闻中...');
        axios.get('/newsList?channel='+ channel).then( (data)=>{
          this.$indicator.close();
          if(data.data.ok !== 1) {
            throw new Error('请求错误，请重试。') ;
            return ;
          }
          this.newsArr = data.data.msg.list;
          this.writeNewsIntoCache(channel,data.data.msg.list)
        }).catch( (e)=>{
          this.$indicator.close();
          this.catchError(e.message)
        })
      },
      isPicWidth (v) {
        if(v) return this.widthStyleObj
      },
      catchError(msg){
        this.$toast(msg)
      },

    },
    mounted () {
      this.channelListLength = this.$store.state.channelList.length;
      this.toShowNews('头条');
    },
    components:{
      swiperCom
    },
    computed: {
      nowChannel () {
        return this.$store.state.nowChannel
      }
    },
    watch: {
      nowChannel: function(v){
        this.toShowNews(v)
      }
    }
  }
</script>
<style scoped lang="scss">
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
    }
  }
</style>
