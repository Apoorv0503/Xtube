import React from 'react';
import {commentsData} from "../utils/constants";
import user from "../Assests/user.png";

const ChatMessage = ({image,name,message}) => {
  return (
    <div className='flex items-center my-2'>
        <img className="w-8 h-8 mx-1 rounded-[50%]" src={image} alt="user"/>
        <div className='flex'>
            <p className='font-bold mx-2'>{name}</p>
            <p className='mx-1'>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage