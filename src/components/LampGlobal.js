import React from 'react'

const LampGlobal = ({isOn, switchlightGlobal}) => {


  return (
    <div className='lamp-and-btn'>
    <div className={`lamp ${isOn}`}></div>
    <button onClick={switchlightGlobal} className='lamp-btn-on'>{isOn}</button>
 </div>
  )
}

export default LampGlobal