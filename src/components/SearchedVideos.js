import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

const SearchedVideos = () => {
  const searchResult = useSelector((store) => store.searchVideos.videos);

  console.log(searchResult)
  return (
    <div className="flex flex-wrap ml-3">
      {searchResult.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <SearchVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};


export default SearchedVideos;
