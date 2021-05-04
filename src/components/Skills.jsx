import React from 'react'
const Skills =({data})=> {
    console.log(data)
    return (
        <div>
            <h1>Skills sets</h1>
          {data && data.map((skill, index)=>(<p index={index}>{skill.name}</p>))  }
        </div>
    )
}
export default  Skills