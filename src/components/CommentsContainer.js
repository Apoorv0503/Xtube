import React from 'react';
import user from "../Assests/user.png";
import { commentsData } from '../utils/constants';

 const Comment=({data})=>{
    return(
        <div className='flex my-4 p-2 shadow-sm rounded-lg'>
            <img className="h-12 w-12 mr-2 rounded-[50%]"src={data.image} alt="user"/>
            <div>
            <h1 className='font-semibold'>{data.name}</h1>
            <p>{data.text}</p>
            </div>
        </div>
    );
}
 const CommentList=({comments})=>{
    return (
        <>
        {comments.map((comment,index)=>(
            <div key={index}>
            <Comment data={comment}/>
            <div className='ml-8'>
               {comment.replies && <CommentList comments={comment.replies}/>}
            </div>
            </div>
        ))}
        </>
      )
}
const CommentsContainer = () => {
  return (
    <div className='ml-28 my-4 w-[53%]'>
        <h1 className='text-2xl'>Comments:</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer