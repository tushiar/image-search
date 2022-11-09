import React from 'react'
import './index.css'
const index = React.forwardRef((props, ref) => {
    return (
        <div className="search-bar">
          <input type="text" placeholder="Search your image here...." ref={ref}/>
          <button  className="search-btn" onClick={props.onSearchHandler}>Search</button>
        </div>
    )
})

export default index
