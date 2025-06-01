import React,{useState} from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import '../../Style/Home.css';

const Home = ({sidebar}) => {
  const [category,setcategory]=useState(0);
  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
      <div className={`container ${sidebar?" ":'large-container'}`}>
      <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home