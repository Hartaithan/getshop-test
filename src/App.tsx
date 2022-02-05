import React from "react";
import { Routes, Route } from "react-router-dom";
import FinalPage from "./pages/FinalPage/FinalPage";
import FormPage from "./pages/FormPage/FormPage";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/final" element={<FinalPage />} />
    </Routes>
  );
}

export default App;
