import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import { apiMiddleware } from "../middlewares/core/api";
import { postsMiddleware } from "../middlewares/feature/posts";

import { postsReducer } from "../reducers/posts"

const coreMiddleware = [apiMiddleware]
const featureMiddleware = [postsMiddleware]


let enhance;
if(process.env.NODE_ENV==='development'){
    enhance = compose(applyMiddleware(...featureMiddleware, ...coreMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}else{
    enhance = compose(applyMiddleware(...featureMiddleware, ...coreMiddleware))
}

const rootReducer = combineReducers({
    postsReducer
})

const store = createStore(rootReducer,enhance);

export default store;