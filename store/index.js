import Vuex from 'vuex';

const cookieparser = process.server ? require('cookieparser') : undefined;

const createStore = () =>
  new Vuex.Store({
    modules: {},
    state: {
      count: 0,
      auth: false,
    },
    mutations: {
      setState(state, payload) {
        for (let key in payload) {
          if (payload[key] && state[key]) {
            state[key] = payload[key];
          }
        }
      },
    },
    action: {
      //服务端获取cookie
      nuxtServerInit({ commit }, { req }) {
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie);
          console.log('123123');
        }
      },
    },
  });

export default createStore;
