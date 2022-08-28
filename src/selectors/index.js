export const postsSelector = state => state.postsReducer.posts?state.postsReducer.posts:[]
export const postSelector = state => state.postsReducer.posts?state.postsReducer.post:[]
