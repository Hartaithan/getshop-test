import React from "react";
import ToFormBadge from "../../components/ToFormBadge/ToFormBadge";
import "./videoPage.scss";

function VideoPage() {
  return (
    <div className="videoPage">
      <ToFormBadge />
      <video autoPlay muted controls={false} loop>
        <source src="./video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPage;
