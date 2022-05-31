import React from 'react'
import LampGlobal from './LampGlobal'
import { useState } from 'react'

const GlobalLamp = () => {

    const [isOnGlobal, setisOnGlobal] = useState('on')


        const switchlightGlobal = () => {
             if (isOnGlobal === ('off')) {
                 setisOnGlobal ('on')
             }else{
                 setisOnGlobal('off')
             }
        }

    
  return (

    
    <div className='global-lamp'>
        <LampGlobal isOn={isOnGlobal} 
        switchlightGlobal={switchlightGlobal}
        />
        <LampGlobal isOn={isOnGlobal} 
        switchlightGlobal={switchlightGlobal}
        />
        <LampGlobal isOn={isOnGlobal} 
        switchlightGlobal={switchlightGlobal}
        /> 
          </div>
  )
}

export default GlobalLamp