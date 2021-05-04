import React from 'react'
const Work =({data})=> {
    // console.log(data)
    return (
        <div>
            <h1>Work experience</h1>
          {data && data.map((work, index)=>(<p>{work.companyName}</p>))  }
        </div>
    )
}
export default  Work