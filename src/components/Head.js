import React, { useEffect, useState } from "react";
import hamburger from "../Assests/hamburger.png";
import youtube from "../Assests/youtube.png";
import search from "../Assests/search.png";
import user from "../Assests/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import {YOUTUBE_VIDEO_SEARCH_API} from "../utils/constants";
import {addVideos} from "../utils/videoResultSlice";
import {GOOGLE_API_KEY} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { YOUTUBE_SEARCH_API } from "../utils/constants"; //implemented this api req in backend to avoid CORS by browser.

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
 
  const navigate=useNavigate();
  const dispatch = useDispatch();
  //get the cached data from the store
  const searchCache = useSelector((store) => store.search);

  //trigger an action to toggle the sidebar view
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSugsestions = async () => {
    try {
      const data = await fetch(
        //backend complete path:  http://localhost:5000/api/search
        
        "https://cinemaify-gpt-backend.onrender.com/api/search?q=" + searchQuery
      );
      const json = await data.json();

      console.log(json[1]);
      setSuggestions(json[1]);

      //saved the API req result to the searchSlice in redux store too, remember to pass the payload as ley-value pairs, 
      // bcz searh time is O(1) in obejects while O(N) in array, hence store in obj/map, you can implement a queue too, 
      // that will pop the oldest element if size of queue is >10, to avoid memory lead in redux store
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const showResults=async(suggestion)=>{
   try{ 
    const URL=YOUTUBE_VIDEO_SEARCH_API+suggestion+"&key="+GOOGLE_API_KEY;
    const data = await fetch(URL);
  
    const json = await data.json();

    console.log(json.items); //final videos array
    dispatch(addVideos(json.items));

    setShowSuggestions(false);
    navigate("search");
  }
  catch(error){
    console.log(error);
  }
  }

  //to implement the debouncing feature, whenever there is change in the search bar input value, we will make call to suggestion API but with
  //debounce implementation.

  useEffect(() => {
    const timer = setTimeout(() => {
      // To optimize the search, we can cache the result of previous keywords search and use it again , in place of making API req for each and every keyword search.
      // Eg: I -> store, Ip -> store, Iphone -> store, now if we search "Ip" again, then pick the stored data from redux store and use it, no API call

      if (searchCache[searchQuery]) {
        //directly store result in state
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 300);

    //whenver there is change in search input -> "seachQuery" state will change, and component will re-render -> useEffect will be called again
    // A new timer will be set, Hence it is very important to clear the previous timer right before component un-mounting and starting a new timer.
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 items-center shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-9 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src={hamburger}
          alt="hamburger-icon"
        />
        <Link to="/"><img className="h-6 mt-1 mx-2" src={youtube} alt="youtube-icon"/></Link>
      </div>
      <div className="flex col-span-10 px-10 flex-col">
        <div className="flex text-center justify-center items-center w-full">
          <input
            type="text"
            className="w-1/2 border border-gray-400 px-3 py-2 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
            <img className="w-6" src={search} />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute top-20 z-10 p-2 justify-center w-[33.5%] ml-60 shadow-lg rounded-lg border border-gray-100 bg-white">
            <ul>
              {
              // search functionality and suggestions
              suggestions.length ? (
                suggestions.map((suggestion, index) => (
                  <li
                    key={suggestion + index}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <img className="w-4 h-4" src={search} />
                      <p className="mx-2" onClick={()=>showResults(suggestion)}>{suggestion}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer">
                  Search Something...
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 mx-auto">
        <img className="h-10" src={user} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
