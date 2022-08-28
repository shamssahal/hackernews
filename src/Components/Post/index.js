import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPost } from '../../actions/posts';
import { postSelector } from '../../selectors';
import Banner from '../Common/Banner'
import PendingLoader from '../Common/PendingLoader';

const  Post = () => {
    const {postId} = useParams();
    const dispatch = useDispatch()
    const [loader,setLoader] = useState(true)

    useEffect(()=>{
        dispatch(getPost(postId))
    },[dispatch,postId])
    const post = useSelector(state=>postSelector(state))
    
    useEffect(()=>{
        if(post.id){
            setLoader(false)
        }
    },[post])
    if(loader){
        return <PendingLoader />
    }else{
        return (
            <div className="container-fluid">
                <div className="page-container">
                    <Banner
                        primaryData={post?post.title:'Loading...'}
                        secondaryData={post?`By: ${post.author} | Points: ${post.points}`:''}
                    />
                    <div className="row">
                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>
            </div>
          
          )
    }
}

export default Post