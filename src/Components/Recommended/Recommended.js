import React,{useEffect,useState} from 'react'
import '../../Style/Recommended.css';
import {Value_Converter} from '../../data';
import {Link} from 'react-router-dom'

const Recommended = ({categoryId}) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; 
  const [apiData,setapiData]=useState([]);
  const fetchData=async()=>{
    const related_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=50&key=${API_KEY}`;
    await fetch(related_url).then(res=>res.json()).then(data=>setapiData(data.items));
  }

   useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='recommended' >
       {apiData.map((item,index)=>{
      return(
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`}   style={{ textDecoration: "none",color:"black" }}  className='side-video-list'>
        <img src={item.snippet.thumbnails.medium.url} alt=""/>
        <div  className='vid-info'>
          <h4>{item.snippet.title}</h4>
          <p>{item.snippet.channelTitle}</p>
          <p>{Value_Converter(item.statistics.viewCount)} views</p>
        </div>
        </Link>
      )
    })}
    </div>
   

  )
}

export default Recommended