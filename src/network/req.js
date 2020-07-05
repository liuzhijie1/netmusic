import axios from 'axios';


export const request = (config) => {
    const instance = axios.create({
        baseURL:'http://localhost:3000/',
        timeout:10000
    })
    
    instance.interceptors.request.use(config=>{
        return config;
    })
    
    
    instance.interceptors.response.use(response=>{
        return response.data;
    })

    return instance(config)
}



