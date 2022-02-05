import React from "react";
import { Link } from "react-router-dom";
import "./toFormBadge.scss";

function ToFormBadge() {
  const [pos, setPos] = React.useState(-251);

  React.useEffect(() => {
    setTimeout(() => {
      setPos(0);
    }, 5000);
  }, []);

  return (
    <div className="toFormBadge" style={{ marginRight: `${pos}px` }}>
      <p className="toFormBadge__title">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </p>
      <img className="toFormBadge__image" src="./qr.png" alt="qr code" />
      <p className="toFormBadge__descr">{`Сканируйте QR-код\nили нажмите ОК`}</p>
      <Link to="/form">
        <button className="toFormBadge__button" type="button">
          ОК
        </button>
      </Link>
    </div>
  );
}

export default ToFormBadge;
