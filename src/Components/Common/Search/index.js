import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className="row mb-3" style={{marginTop:'30px'}}>
        <div className="col-3"></div>
        <div className="col-6">
            <form class="nosubmit">
                <input class="nosubmit" type="search" placeholder="Search..."/>
            </form>
        </div>        
        <div className="col-3"></div>
    </div>
                    
  )
}

export default Search