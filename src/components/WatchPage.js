import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  //first of all we need to show video and its data and for that we need video id, that we will get from url search parametre, utilize a react hook for that

  /*
Note:
- Just like useState hook, useSearchParams returns an array of two values: the current location's search params and a function that 
  may be used to update them eg:  let [searchParams, setSearchParams] = useSearchParams();

- we only need search parameter so , we will take that only
*/
  const [searchParams] = useSearchParams();

  //url: http://localhost:3000/watch?v=Ujb2c508yw0, to get the value of a "key" in search query string use "get" method with "key" name in it.
  const videoId = searchParams.get("v");
  console.log(videoId);

  //we need to close the sideBar on this watch page, dispatch a new action for this, bcz can not toggle here
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex">
      <div>
      <iframe
        className="ml-28 my-4 rounded-lg"
        width="850"
        height="450"
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <CommentsContainer/>
    </div>
    <div className="w-[30rem]">
      <LiveChat/>
    </div>
    </div>
  );
};

export default WatchPage;
