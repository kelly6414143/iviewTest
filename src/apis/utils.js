import router from '../router'


export const message = msg =>{
    console.log(msg)
}

//跳轉回首頁, 攜帶當前的頁面路由, 登入完成後跳轉回原本畫面
export const toLogin = () =>{
    router.replace({
        name: 'login',
        query:{
            redirect: router.currentRoute.fullPath
        }
    })
}

export const to403Page = () =>{
    router.replace({
        name: '403'
    })
}