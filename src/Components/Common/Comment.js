/* eslint-disable jsx-a11y/anchor-is-valid */
import moment from 'moment'
import React from 'react'
import { Markup } from 'interweave';

const  Comment = ({comments}) => {
    const { created_at, author, text, children } = comments;

    return (
    
    <div className="d-flex mt-2">
        <div>
            <h5 className="m-0 font-12" style={{color:'teal'}}><i className="uil-user font-14" style={{marginRight:'8px'}}></i>{author?author:`[ No Author ]`} </h5>
            <p className="text-muted mx-3 mb-0" style={{color:'#afb0b3'}}><small>{moment(created_at).fromNow()}</small></p>
          
            <Markup content={text} className="text-secondary" />

            <div style={{ 
                    position: 'relative', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    left: 25, 
                    borderLeft: '1px solid #dee0e3', 
                    paddingLeft: 10, 
                    maxWidth: '1200px',
                }}>
                
                {children ? children.map((child,index)=><Comment key={index} comments={child} />):null}
            </div> 
        </div>
    </div> 
    )
}

export default Comment