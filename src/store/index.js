import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    nowChannel:'头条'
  },
  actions:{
    commitNowChannel( obj, v) {
      obj.commit('changeNowChannel',v);
    }
  },
  mutations:{
    changeNowChannel( state, v){
      state.nowChannel = v;
    }
  },
  getters:{
    changedChannel(state){
      return state.nowChannel
    }
  }
});
export default store;
