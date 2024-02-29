import React,{Suspense} from 'react'
import LoadingScreen from "../pages/Notification"


const withLazy = (LazyComponent)=>{
  return (props)=>{
    return (
      <Suspense fallback={<LoadingScreen/>}>
        <LazyComponent {...props}/>
      </Suspense>
    )
  }
}

export default withLazy