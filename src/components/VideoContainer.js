import React, { useEffect, useState } from 'react';
import {YOUTUBE_VIDEOS_API} from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos, setVideos]=useState([]);
  const getVideos=async()=>{
    try{
      const res=await fetch(YOUTUBE_VIDEOS_API);
      const json=await res.json();
      console.log(json.items);
      setVideos(json.items);
    }
    catch(error){
      console.log(error);
    }
   
  }

  useEffect(()=>{
    getVideos();
  },[])

  if(!videos.length) return null;

  return (
    <div className='flex flex-wrap ml-3'>
    <AdVideoCard info={videos[10]}/>
      { videos.map((video)=>(

        <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video}/></Link>
        ))}
    </div>
  )
}

export default VideoContainer