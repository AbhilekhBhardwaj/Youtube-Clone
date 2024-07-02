import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.mp4'
import dislike from '../../assets/dislike.mp4'
import share from '../../assets/share.mp4'
import save from '../../assets/save.mp4'
import jack from '../../assets/jack.mp4'
import user_profile from '../../assets/user_profile.mp4'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoplay muted></video>
    </div>
  )
}

export default PlayVideo
