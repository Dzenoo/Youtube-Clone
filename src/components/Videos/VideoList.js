import React, { useState } from "react";
import "./VideoList.scss";
import { AiOutlineSearch } from "react-icons/ai";

import Data from "../../data/Data";
import VideoItem from "./VideoItem";
import { useEffect } from "react";

const VideoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [videos, setVideos] = useState([]);

  const searchVideos = () => {
    const videoItem = Data.filter((item) =>
      item.author.toLowerCase().includes(inputValue)
    ).map((videoItem) => (
      <VideoItem
        id={videoItem.id}
        key={videoItem.id}
        image={videoItem.image}
        title={videoItem.title}
        author={videoItem.author}
      />
    ));

    setVideos(videoItem);
  };

  useEffect(() => {
    searchVideos();
  }, []);

  return (
    <section className="layout">
      <h1
        style={{
          fontSize: "3rem",
          color: "#fff",
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        Search Channels
      </h1>
      <div className="navbar_input">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={searchVideos}>
          <AiOutlineSearch />
        </button>
      </div>
      <ul className="video_list">{videos}</ul>
    </section>
  );
};

export default VideoList;
