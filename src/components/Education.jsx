import React from 'react'
const Education =({data})=> {
    // console.log(data)
    return (
        <div>
            <h1>Education</h1>
          {data && data.map((work, index)=>(<p index={index}>{work.schoolName}</p>))  }
        </div>
    )
}
export default  Education