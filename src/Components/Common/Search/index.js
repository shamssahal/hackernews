/* eslint-disable react-hooks/exhaustive-deps */

import _ from 'lodash'
import React,{useState,useCallback} from 'react'
import './Search.css'



const Search = ({setDebounceSearchTerm}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const debounce = useCallback(_.debounce((searchVal)=>{setDebounceSearchTerm(searchVal)},1000),[])

    const handleOnChange = (e)=>{
        setSearchTerm(e.target.value)
        debounce(e.target.value)
    }
    
    return (
        <div className="row mb-3" style={{marginTop:'30px'}}>
            <div className="col-3"></div>
            <div className="col-6">
                <form className="nosubmit">
                    <input 
                    className="nosubmit" 
                    type="search" 
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleOnChange}
                    />
                </form>
            </div>        
            <div className="col-3"></div>
        </div>                
    )
}

export default Search