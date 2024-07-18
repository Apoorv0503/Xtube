import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import history from "../Assests/sidebar/history.png";
import home from "../Assests/sidebar/home.png";
import likes from "../Assests/sidebar/likes.png";
import playlist from "../Assests/sidebar/playlist.png";
import shorts from "../Assests/sidebar/shorts.png";
import subscription from "../Assests/sidebar/subscription.png";
import watchLater from "../Assests/sidebar/watchLater.png";
import yourChannel from "../Assests/sidebar/yourChannel.png";
import yourVideos from "../Assests/sidebar/yourVideos.png";
import news from "../Assests/sidebar/news.jpg";

const Sidebar = () => {
  //access the status of sidebar from store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // useEffect(()=>{
      //make sidebar open on the first render
  // },[])

  //early return if menu is not open
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg">
      <ul>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={home} alt="home-icon" />
          <h3>Home</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={shorts} alt="shorts-icon" />
          <h3>Shorts</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={subscription} alt="subs-icon" />
          <h3>Subscriptions</h3>
        </li>
      </ul>
      <h1 className="font-bold pt-5">You{" >"} </h1>
      <ul>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={yourChannel} alt="yourChannel-icon" />
          <h3>Your Channel</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={history} alt="history-icon" />
          <h3>History</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={yourVideos} alt="yourVideos-icon" />
          <h3>Your Videos</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={watchLater} alt="later-icon" />
          <h3>Watch Later</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={likes} alt="likes-icon" />
          <h3>Liked Videos</h3>
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={news} alt="likes-icon" />
          <h3>ABP news</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={news} alt="likes-icon" />
          <h3>Aaj Tak</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={news} alt="likes-icon" />
          <h3>NASA</h3>
        </li>
        <li className="flex align-bottom my-2 py-2 px-1">
          <img className="w-6 mr-4" src={news} alt="likes-icon" />
          <h3>The Lallantop</h3>
        </li>
      </ul>
      <h3>More ...</h3>
    </div>
  );
};

export default Sidebar;
