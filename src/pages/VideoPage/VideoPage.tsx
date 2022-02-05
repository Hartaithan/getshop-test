import React from "react";
import { Link } from "react-router-dom";
import "./videoPage.scss";

function VideoPage() {
  return (
    <div className="videoPage">
      <div className="videoPage__badge">
        <p className="videoPage__badge__title">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </p>
        <img src="./qr.png" alt="qr code" />
        <p>{`Сканируйте QR-код\nили нажмите ОК`}</p>
        <Link to="/form">
          <button>ОК</button>
        </Link>
      </div>
      <video autoPlay muted controls={false} loop>
        <source src="./video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPage;
