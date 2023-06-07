import React, {createContext, useContext, useMemo, useState} from 'react'

const profileContext = createContext(undefined)

const ProfileContext = (props) => {
  const [data, setData] = useState('')
  
  const values= useMemo(()=> ({data,setData}),[data, setData])
  
  return (
    <profileContext.Provider value={values}>
      {props.children}
    </profileContext.Provider>
  )
}

const useProfileContext = () => {
  const context = useContext(profileContext);
  if (!context){
    throw new Error('Error!');
  }
  return context
}
export {ProfileContext, useProfileContext}