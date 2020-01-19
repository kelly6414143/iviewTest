export default {
    state: {
        token: window.localStorage.getItem('token'),
        auth: false,
        userInfo: {}
      },
      mutations: {
        setToken (state, token) {
          state.token = token
          window.localStorage.setItem('token', token)
        },
        clearToken (state) {
          state.token = ''
          window.localStorage.setItem('token', '')
        },
        setUserInfo (state, userInfo) {
          state.userInfo = userInfo
          state.auth = true // 获取到用户信息的同时将auth标记为true，当然也可以直接判断userInfo
        }
      },
      actions: {
        permission (ctx, token) {
          return 123
        },
        // async getUserInfo (ctx, token) {
        //   return fetchUserInfo(token).then(response => {
        //     if (response.code === 200) {
        //       ctx.commit('setUserInfo', response.data)
        //     }
        //     return response
        //   })
        // },
        // async login (ctx, account) {
        //   return login(account).then(response => {
        //     if (response.code === 200) {
        //       ctx.commit('setUserInfo', response.data.userInfo)
        //       ctx.commit('setToken', response.data.token)
        //     }
        //   })
        // }
      }
}