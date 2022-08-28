import { POSTS_SET, POST_SET } from "../../actions/posts"

const initState = []
export const postsReducer = (state=initState,action) =>{
    switch(action.type){
        case POSTS_SET:
            return {...state,posts:action.payload}
        case POST_SET:
            return {...state,post:action.payload}
        default: return state
    }
}

