import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    channelArr:[]
  },
  actions:{
    commitChannelArr( obj, v) {
      obj.commit('changeChannelArr',v);
    }
  },
  mutations:{
    changeChannelArr( state, v){
      state.channelArr = v;
    }
  },
  getters:{
    changedChannelArr(state){
      return state.channelArr
    }
  }
});
export default store;
