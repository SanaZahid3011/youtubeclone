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
    const [Apidata,setApidata] = useState(null)

    const fetchvideoData=async (params) => {
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY  }`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApidata(data.items[0]));
    }
    useEffect(() => {
    fetchvideoData();
  }, [])
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
            <img src={jack} alt="" />
            <div>
                <p>{Apidata?Apidata.snippet.channelTitle:"Title Here"}</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>{Apidata ?Apidata.snippet.description.slice(0,300) : "Description Here"}</p>
            <hr/>
            <h4>{Apidata?Value_Converter(Apidata.statistics.commentCount):"166"} Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson<span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and interconnect
                    network using standardlized communication protocol.</p>
                    <div className='comment-section'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
                 <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson<span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and interconnect
                    network using standardlized communication protocol.</p>
                    <div className='comment-section'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

                 <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson<span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and interconnect
                    network using standardlized communication protocol.</p>
                    <div className='comment-section'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
                 <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson<span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and interconnect
                    network using standardlized communication protocol.</p>
                    <div className='comment-section'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
                 <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson<span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and interconnect
                    network using standardlized communication protocol.</p>
                    <div className='comment-section'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
                 <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson<span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and interconnect
                    network using standardlized communication protocol.</p>
                    <div className='comment-section'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playvideo 