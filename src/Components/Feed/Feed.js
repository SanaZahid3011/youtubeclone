import React,{useState,useEffect}from 'react'
import '../../Style/Feed.css';
import { Link } from 'react-router-dom';
import {API_KEY} from '../../data';
import {Value_Converter} from '../../data';
import moment from 'moment';


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
        <p style={{ color:"#5a5a5a" }}>{ Value_Converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
    </Link>
      )
    })}
   

    </div>
  )
}

export default Feed