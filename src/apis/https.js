import axios from 'axios'
import router from '../router'
import {message, toLogin, to403Page} from './utils'


let instance = axios.create({
    baseURL:'api/'
})

const errorHandle = (status, msg)=>{
    console.log(status,msg)
    switch(status){
        case 400:
            message(msg);
            break
        case 401:
            message('登入過期,請重新登入');
            setTimeout(()=>{
                toLogin();
            }, 1000)
        break
        case 403:
            to403Page()
            break
        case 404:
            message(msg);
            break
        default:
            console.log('else error'+msg)
    }
}



instance.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error)
})

instance.interceptors.response.use((res)=>{
    return res
},(error)=>{
    const {res} =error;

    if(res){
        errorHandle(res.status, res.data.error);
        return Promise.reject(error)
    }else{
        if(!window.navigator.onLine){
            message('網路出了點問題,請重新刷新網頁')
        }else{
            return Promise.reject(error)
        }
    }
})

export default function(method, url, data = null){
    method = method.toLowerCase()
    if(method === 'post'){
        return instance.post(url, data)
    }else if(method === 'get'){
        return instance.get(url,
        {params: data,
        headers: {
                'Content-Type': 'application/json', //设置跨域头部
            } })
    }else if(method === 'delete'){
        return instance.delete(url, {params: data})
    }else if(method === 'put'){
        return instance.put(url, data)
    }else if(method === 'upload'){
        // uploader(url, file, auth = false) {
            // let param = new FormData();
            // param.append('file', file)
            // if (auth) {
                return instance.post(url, param, 
                    {headers: {Authorization: ''}
                })
            // } else {
                // return instance.post(url, param)
            // }
    
    }else{
        console.error('未知的method'+method)
        return false
    }
}