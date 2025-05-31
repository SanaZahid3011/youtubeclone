import React from 'react'
import Playvideo from '../../Components/Playvideo/Playvideo'
import '../../Style/Video.css';
import Recommended from '../../Components/Recommended/Recommended';

const Video = () => {
  return (
    <div className='play-container'>
      <Playvideo/>
      <Recommended/>
    </div>
  )
}

export default Video