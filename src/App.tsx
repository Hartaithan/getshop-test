import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FinalPage from "./pages/FinalPage/FinalPage";
import FormPage from "./pages/FormPage/FormPage";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  const { pathname } = useLocation();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoCurrentTime, setVideoCurrentTime] = React.useState(0);

  function pauseVideo() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  function playVideo() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  React.useEffect(() => {
    if (pathname === "/") {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<VideoPage videoCurrentTime={videoCurrentTime} />}
        />
        <Route path="/form" element={<FormPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
      <video
        autoPlay
        muted
        controls={false}
        loop
        ref={videoRef}
        onTimeUpdate={(e: any) => setVideoCurrentTime(e.target.currentTime)}
      >
        <source src="./video.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
