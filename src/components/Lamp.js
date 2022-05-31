import React from 'react'
import { useState } from 'react'

 const Lamp = () => {

const [isOn, setisOn] = useState('on')
const switchlight = () => { 
  if (isOn === 'on') {
    setisOn('off')
  }else{
    setisOn ('on')
  }
}

  return (

    <div className='lamp-and-btn'>
       <div className={`lamp ${isOn}`}></div>
       <button onClick={switchlight} className='lamp-btn-on'>{isOn}</button>
    </div>
   
  )
}


export default Lamp;