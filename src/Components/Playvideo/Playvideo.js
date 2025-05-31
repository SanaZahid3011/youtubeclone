import React from 'react';
import '../../Style/Playvideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

const Playvideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best youTube Channel to learn web development</h3>
        <div className='play-video-info'> 
            <p>1525 views ,2 days ago</p>
            <div>
                <span><img src={like} alt=""/>125</span>
                <span><img src={dislike} alt=""/>2</span>
                <span><img src={share} alt=""/>Share</span>
                <span><img src={save} alt=""/>Save</span>
            </div>
        </div>
        <hr/>
        <div className='Publisher'>
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>Channel that make learning easy</p>
            <p>Subscribe GeatStack to watch more tutorials on web development</p>
            <hr/>
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