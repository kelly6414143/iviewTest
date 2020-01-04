//api.js
import req from './https'

const api={
    name:{
        getList(){
            return req('get','/guest')
        },
        addGuest(params){
            return req('post','/guest',params)
        }
    }
}

export default api
//api.js

// import axios from 'axios'

// const api={
//     name:{
//         getList:()=>{
//             return axios.get('api/guest')
//         },
//         addGuest(params){
//             return axios.post('api/guest',params)
//         }
//     }
// }

// export default api
