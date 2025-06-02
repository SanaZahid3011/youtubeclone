import React,{useState,useEffect}from 'react'
import '../../Style/Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';
import {API_KEY} from '../../data';
import {Value_Converter} from '../../data';

const Feed = ({category}) => {
  const [data ,setdata]= useState([])
  const fetchdata=async () => {
  
    const videolink_URL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `
    await fetch(videolink_URL).then(response=>response.json()).then(data=>setdata(data.items))
  }
  useEffect(() => {
    fetchdata()
  }, [category])
  
  return (
    <div className='feed'>
    {data.map((item,index)=>{
      return(
         <Link style={{ textDecoration: 'none' }} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p style={{ color:"#5a5a5a" }}>{ Value_Converter(item.statistics.viewCount)} views &bull; 2days ago</p>
    </Link>
      )
    })}
   

    </div>
  )
}

export default Feed