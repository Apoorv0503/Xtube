import React from 'react'

const SearchVideoCard = ({info}) => {
   // console.log(info);
   
   const { snippet} = info;
   const { title, thumbnails, channelTitle, publishTime } = snippet;
 
    const countVideoAge=(publishTime)=>{
            // Parse the publish time
            const publishDate = new Date(publishTime);
            const currentDate = new Date();
          
            // Calculate the difference in milliseconds
            const diff = currentDate - publishDate;
          
            // Calculate the difference in different units
            const msInHour = 1000 * 60 * 60;
            const msInDay = msInHour * 24;
            const msInYear = msInDay * 365.25; // Considering leap years
            const msInMonth = msInYear / 12;
          
            const years = Math.floor(diff / msInYear);
            const months = Math.floor(diff / msInMonth);
            const days = Math.floor(diff / msInDay);
            const hours = Math.floor(diff / msInHour);
          
            if (years > 0) {
              return `${years} year${years > 1 ? 's' : ''}`;
            } else if (months > 0) {
              return `${months} month${months > 1 ? 's' : ''}`;
            } else if (days > 0) {
              return `${days} day${days > 1 ? 's' : ''}`;
            } else {
              return `${hours} hour${hours > 1 ? 's' : ''}`;
            }
          
    }
 
   return (
     <div className="w-72 p-2 m-2">
       <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
       <ul>
         <li className="font-bold">{title}</li>
         <li>{channelTitle}</li>
         <li>
           {publishTime && countVideoAge(publishTime)+" ago"}
         </li>
       </ul>
     </div>
   );
 };


export default SearchVideoCard