import Vue from "vue";
import Vuex from "vuex";

import StickersStore from "./modules/stickers.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    StickersStore,
  },
});
