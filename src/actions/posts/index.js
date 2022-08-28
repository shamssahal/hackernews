//features
export const POSTS = `[POSTS]`;
export const POST = `[POST]`;

//action types
export const POSTS_GET = `${POSTS} GET`;
export const POSTS_SET = `${POSTS} SET`;

export const POST_GET = `${POST} GET`;
export const POST_SET = `${POST} SET`;

//action creators
export const getPosts = (data) => ({
    type:POSTS_GET,
    payload:data
})

export const setPosts = (data) => ({
    type:POSTS_SET,
    payload:data
})

export const getPost = (data) => ({
    type:POST_GET,
    payload:data
})

export const setPost = (data) => ({
    type:POST_SET,
    payload:data
})
