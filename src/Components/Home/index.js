import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, setPost } from '../../actions/posts'
import { postsSelector } from '../../selectors'
import Card from '../common/Card'
import Search from '../common/search'
import DataTable from '../dataTable'




const  Home = () => {
    const dispatch = useDispatch()
    const [debounceSearchTerm, setDebounceSearchTerm] = useState('')

    useEffect(()=>{
        dispatch(setPost({}))
        dispatch(getPosts(debounceSearchTerm))
    },[dispatch,debounceSearchTerm])

    const posts = useSelector(state=>postsSelector(state))
    
    const data = posts?posts.map(post=>({
        title:post.title,
        url:post.url,
        points:post.points,
        author:post.author,
        num_comments:post.num_comments,
        created_at:post.created_at,
        objectID:post.objectID
    })):[]

  return (
        <div className="container-fluid">
            <div className="page-container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex justify-content-center">
                            <h1 className="">
                                <span style={{color:'coral'}}>Hacker News</span> Search
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card optionColor='true'>
                            <Search
                                setDebounceSearchTerm={setDebounceSearchTerm}
                            />
                            <DataTable
                                data={data}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home