import React from "react";
import visit from "../Assests/visit.png";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  const formatViews = (views) => {
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1) + "M";
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1) + "K";
    } else {
      return views.toString();
    }
  };

  return (
    <div className="w-72 p-2 m-2">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {statistics.viewCount && formatViews(statistics.viewCount) + " views"}
        </li>
      </ul>
    </div>
  );
};

//A high order component to show ads
export const AdVideoCard = ({ info }) => {
  let { snippet, statistics } = info;
  let { title, thumbnails, channelTitle } = snippet;

  const newChannelTitle = "Sponsored: " + channelTitle;

  // Create the newInfo object with the modified channelTitle and empty statistics, so that we can show this card as the advertisement card
  let newInfo = {
    ...info,
    snippet: {
      ...snippet,
      channelTitle: newChannelTitle,
    },
    statistics: {},
  };

  return (
    <div className="relative p-1 m-1">
      <VideoCard info={newInfo} />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-300 
      hover:bg-opacity-80 text-black opacity-0 hover:opacity-100 transition duration-300 rounded-lg radial-gradient-bg cursor-pointer">
        <h3 className="text-2xl text-black">Visit</h3>
        <img className="w-6 mx-2" src={visit} alt="visit-link"/>
      </div>
    </div>
  );
};

export default VideoCard;
