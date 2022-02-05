import React from "react";
import ToFormBadge from "../../components/ToFormBadge/ToFormBadge";
import { IVideoPageProps } from "../../models/VideoPageModel";
import "./videoPage.scss";

function VideoPage(props: IVideoPageProps) {
  const { videoCurrentTime } = props;
  return (
    <div className="videoPage">
      <ToFormBadge videoCurrentTime={videoCurrentTime} />
    </div>
  );
}

export default VideoPage;
