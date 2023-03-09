import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    all: `全局的数据${Date.now()}`,
  },
  mutations: {
    updateValue(state, payload) {
      state.all = payload;
    },
  },
  actions: {
    kkk({ commit }, payload) {
      axios({
        method: "get",
        url: "http://localhost:8000/getArticleCategory",
        params: {},
      })
        .then((res) => {
          commit("updateValue", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
