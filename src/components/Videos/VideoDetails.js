import { Link, useParams } from "react-router-dom";

import Data from "../../data/Data";

import profileImg from "../../assets/profileImg.png";

import "./VideoDetails.scss";

const VideoDetails = () => {
  const { videoId } = useParams();

  const videoItem = Data.find((videoItem) => videoItem.id === videoId);

  return (
    <section className="details__section">
      <div className="current__div">
        <img src={videoItem.image} alt={videoItem.title} />
        <h1>{videoItem.title}</h1>

        <div className="current_title">
          <img src={profileImg} />
          <p>{videoItem.author}</p>
        </div>
      </div>

      <div>
        <ul className="list__items">
          {Data.map((item) => (
            <li key={item.id} className="list_item">
              <Link to={`/videos/${item.id}`}>
                <img src={item.image} className="img" />
              </Link>
              <div>
                <h1>{item.title}</h1>
                <span>{item.author}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VideoDetails;
