import React from 'react'

const Card = ({children,optionColor=false}) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body" style={{backgroundColor:optionColor?'#fce8d4':'white'}}>
                        {children}                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card