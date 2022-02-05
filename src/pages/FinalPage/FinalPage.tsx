import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import "./finalPage.scss";

function FinalPage() {
  return (
    <div className="finalPage">
      <Slider />
      <Link to="/form">
        <button className="finalPage__quit" type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.34484"
              y1="1.94067"
              x2="22.6264"
              y2="22.2223"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
            <line
              x1="1.6576"
              y1="22.2223"
              x2="21.9392"
              y2="1.94067"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default FinalPage;
