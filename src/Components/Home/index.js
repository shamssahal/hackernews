import React from 'react'
import Card from '../Common/Card'
import Search from '../Common/Search'
import DataTable from '../DataTable'


const  Home = () => {
  return (
        <div className="container-fluid">
            <div className="page-container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex justify-content-center">
                            <h1 className="">
                                Hacker News Search
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card>
                            <Search/>
                            <DataTable
                                data={[
                                    {
                                        "title": "A Message to Our Customers",
                                        "url": "http://www.apple.com/customer-letter/",
                                        "points": 5771,
                                        "author": "epaga",
                                        "num_comments": 967,
                                        "created_at": "2016-02-17T08:38:37.000Z",
                                        "objectID":11116274
                                    }
                                ]}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home