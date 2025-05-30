import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import '../../Style/Home.css';

const Home = ({sidebar}) => {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?" ":'large-container'}`}>
      <Feed/>
      </div>
    </div>
  )
}

export default Home