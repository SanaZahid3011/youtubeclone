import React,{useState,useEffect}from 'react'
import '../../Style/Feed.css';
import { Link } from 'react-router-dom';
import {Value_Converter} from '../../data';
import moment from 'moment';


const Feed = ({category}) => {

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; 
  
  console.log("API_KEY:", API_KEY);
  const [data ,setdata]= useState([])
  const fetchdata=async () => {
  
    const videolink_URL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `
    await fetch(videolink_URL).then(response=>response.json()).then(data=>setdata(data.items))
  }
  useEffect(() => {
    fetchdata();
  }, [category])
  
  return (
  <div className='feed'>
    {data && data.length > 0 ? (
      data.map((item, index) => (
        <Link
          style={{ textDecoration: 'none' }}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className='card'
          key={index}
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p style={{ color: "#5a5a5a" }}>
            {Value_Converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

} 

export default Feed