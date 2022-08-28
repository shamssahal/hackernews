import { apiRequest,API_SUCCESS,API_ERROR } from "../../../actions/api"
import { POST, POSTS, POSTS_GET, POST_GET, setPost, setPosts } from "../../../actions/posts"
import {ROOT_URL} from '../../../config/'

export const postsMiddleware = ({dispatch}) => next => (action) =>{
    next(action)
    switch(action.type){
        case POSTS_GET:
            dispatch(apiRequest({
                body:action.payload,
                config:{},
                url:`${ROOT_URL}/search`,
                method:'get',
                feature:POSTS
            }))
            break;
        case POST_GET:
            dispatch(apiRequest({
                body:action.payload,
                config:{},
                url:`${ROOT_URL}/item/${action.payload}`,
                method:'get',
                feature:POST
            }))
            break;

            
        case `${POSTS} ${API_SUCCESS}`:
                dispatch(setPosts(action.payload))
                break;

        case `${POST} ${API_SUCCESS}`:
            dispatch(setPost(action.payload))
                break;   
        case `${POST} ${API_ERROR}`:
            console.log('error')
            break;
        
            default: break;
    }
}

