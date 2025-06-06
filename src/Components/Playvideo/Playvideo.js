import React ,{useState,useEffect}from 'react';
import '../../Style/Playvideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import {API_KEY} from '../../data';
import {Value_Converter} from '../../data';
import moment from 'moment';

const Playvideo = ({videoId}) => {
    const [Apidata,setApidata] = useState(null);
    const [channelData,setChannelData]=useState(null);
     const [commentData,setCommentData]=useState([]);

    const fetchvideoData=async (params) => {
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApidata(data.items[0]));
    }

      const fetchChannelData=async (params) => {
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${Apidata.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

        const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));
    }

    useEffect(() => {
    fetchvideoData();
  }, []);

useEffect(() => {
  if (Apidata && Apidata.snippet && Apidata.snippet.channelId) {
    fetchChannelData();
  }
}, [Apidata]);

  return (
    <div className='play-video'>
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{Apidata?Apidata.snippet.title:"Title Here"}</h3>
        <div className='play-video-info'> 
            <p>{Apidata?Value_Converter(Apidata.statistics.viewCount):"16k"} views , {Apidata ? moment(Apidata.snippet.publishedAt).fromNow() : "Some time ago"}</p>
            <div>
                <span><img src={like} alt=""/>{Apidata?Value_Converter(Apidata.statistics.likeCount):"166"}</span>
                <span><img src={dislike} alt=""/></span>
                <span><img src={share} alt=""/>Share</span>
                <span><img src={save} alt=""/>Save</span>
            </div>
        </div>
        <hr/>
        <div className='Publisher'>
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{Apidata?Apidata.snippet.channelTitle:"Title Here"}</p>
                <span>{channelData?Value_Converter(channelData.statistics.subscriberCount):""} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>{Apidata ?Apidata.snippet.description.slice(0,300) : "Description Here"}</p>
            <hr/>
            <h4>{Apidata?Value_Converter(Apidata.statistics.commentCount):"166"} Comments</h4>
           
           
        </div>
    </div>
  )
}

export default Playvideo 