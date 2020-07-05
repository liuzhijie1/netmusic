import {request} from './req.js';


export default {
    SearchMusic(keywords){
        return request({
            url:'search',
            params:{
                keywords,
            }
        })
    }
}