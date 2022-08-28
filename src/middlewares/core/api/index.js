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
                    if(action.meta.method==='get'){
                        resp = await axios.get(action.meta.url,{ params: {query:action.payload}});
                        dispatch(apiSuccess(resp.data.hits,action.meta.feature,resp.status))                        
                        
                    }
                    break;
                case POST:
                    if(action.meta.method==='get'){
                        resp = await axios.get(action.meta.url);
                        console.log(resp)
                        dispatch(apiSuccess(resp.data,action.meta.feature,resp.status))                        
                    }
                    dispatch(apiSuccess(resp.data,action.meta.feature,resp.status))                        
                    break;
                default:break; 
        }
    }catch(err){
        console.log(err)
        dispatch(apiError(err,action.meta.feature))
    }
}}