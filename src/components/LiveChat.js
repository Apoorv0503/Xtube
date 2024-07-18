import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import {commentsData} from "../utils/constants";
import {getRandomComment} from "../utils/helper";
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from "../utils/chatSlice";
import user from "../Assests/user.png";


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages);

    useEffect(()=>{
        //set-interval implemented to mimic the API polling machenism for live chat section
        let i=setInterval(()=>{

            //a random user object with dp, name and message.
            const newChat=getRandomComment(commentsData);
            dispatch(addMessage(newChat));
        },1500);

        //clean up logic
        return ()=>clearInterval(i);
    },[]);

  return (
    <div className='p-4 my-4 mx-6 w-full border shadow-lg rounded-lg'>
         <h1 className='mx-2 font-semibold'>Live Chat</h1>
         <div className=' h-[500px] overflow-y-scroll flex flex-col-reverse'>
       {chatMessages.map((chat)=>(
        <ChatMessage image={chat.image} name={chat.name} message={chat.text}/>
       ))}
       </div>
       <form
        className="w-full my-1 p-2"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
                name: "Apoorv",
                text: liveMessage,
                image: user,
                replies: [],
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 py-1 w-[22rem] bg-gray-100 focus:outline-none"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 py-1 bg-green-100 rounded-lg">Send</button>
      </form>
    </div>
 
  )
}

export default LiveChat