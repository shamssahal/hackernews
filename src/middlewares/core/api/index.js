import axios from 'axios'
import {apiSuccess,apiError,API_REQUEST} from '../../../actions/api'
import { POST, POSTS } from '../../../actions/posts';

export const apiMiddleware = ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type.includes(API_REQUEST)){
        let resp;
        try{
            switch(action.meta.feature){
                case POSTS:
                case POST:
                    if(action.meta.method==='get'){
                        resp = await axios.get(action.meta.url,{ params: {query:action.payload}});
                        console.log('resp = ',resp)
                        dispatch(apiSuccess(resp.data.responseData,action.meta.feature,resp.data.responseStatus.message))                        
                        break;
                    }
                    dispatch(apiSuccess(resp.data.responseData,action.meta.feature,resp.data.responseStatus.message))                        
                    break;
                default:break; 
        }
    }catch(err){
        dispatch(apiError(err,action.meta.feature))
    }
}}