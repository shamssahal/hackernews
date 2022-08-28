import React from 'react'

// Common Banner Component for all Book Details and User Details Pages
const Banner = ({
    primaryData,
    secondaryData,
}) => {
  return (
            <div className="row">
                <div className="col-12">
                    <div className="card bg-secondary">
                        <div className="card-body profile-user-box">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div>
                                        <div className="row">
                                            <div className="col-9">
                                                <div className="row d-flex flex-col">
                                                    
                                                    <h1 className="mt-1 mb-1 text-white">
                                                        {primaryData} 
                                                    </h1>
                                                </div>
                                                
                                                <h3 className="text-white-50 mb-1">
                                                    {secondaryData}
                                                </h3>
                                        
                                            </div>
                                            <div
                                                className="col-3"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "flex-end",
                                                    paddingRight: "2em",
                                                }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

 
        
    )
}

export default Banner