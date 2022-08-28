import React from 'react'
import { Grid, _ } from "gridjs-react";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const DataTable = ({data}) =>{
    const navigate = useNavigate()
    const handleOnclick = (id) =>{
        navigate(`/post/${id}`)
    }

    const tableData = data?data.map(({
        title,
        url,
        points,
        author,
        num_comments,
        created_at,
        objectID
    })=>[
        _(
            <>
                <p className="font-14" onClick={()=>{handleOnclick(objectID)}}>
                    {title}
                    <p className="font-12" style={{color:'#8391a2'}}>
                        {`${points} points by ${author} ${moment(created_at).fromNow()} | ${num_comments} comments`}
                    </p>
                </p>
                
            </>
        )
    ]):[]
  return (
    <div className="row" style={{marginTop:'40px'}}>
        <div className="col-2"></div>
        <div className="col-8">
            <div className="tab-content">
                <div
                    className="tab-pane show active"
                    id="basic-datatable-preview"
                >
                    <div id="basic-datatable-wrapper">
                        <Grid
                            data={tableData}
                            columns={[
                                {name:"News",width:"10%"},
                            ]}
                            pagination={{
                                enabled: true,
                                limit: 20,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-2"></div>

    </div>

    
  )
}

export default DataTable