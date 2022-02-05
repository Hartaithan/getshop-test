import React from "react";
import { Link } from "react-router-dom";
import "./toFormBadge.scss";

function ToFormBadge() {
  return (
    <div className="toFormBadge">
      <p className="toFormBadge__title">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </p>
      <img className="toFormBadge__image" src="./qr.png" alt="qr code" />
      <p className="toFormBadge__descr">{`Сканируйте QR-код\nили нажмите ОК`}</p>
      <Link to="/form">
        <button className="toFormBadge__button">ОК</button>
      </Link>
    </div>
  );
}

export default ToFormBadge;
