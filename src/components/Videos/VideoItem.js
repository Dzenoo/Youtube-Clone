import React from "react";
import { Link } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";

import "./VideoItem.scss";

const VideoItem = (props) => {
  return (
    <li className="item" key={props.id}>
      <div className="item_img">
        <Link to={`/videos/${props.id}`}>
          <img src={props.image} alt={props.title} />
        </Link>
      </div>
      <div className="item_desc">
        <h1>{props.title}</h1>
        <span style={{ display: "flex", gap: "12px", color: "grey" }}>
          {props.author}
          <FaCheckCircle />
        </span>
      </div>
    </li>
  );
};

export default VideoItem;
