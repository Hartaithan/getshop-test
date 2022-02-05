import React from "react";
import { Link } from "react-router-dom";
import { IToFormBadgeProps } from "../../models/ToFormBadgeModel";
import "./toFormBadge.scss";

function ToFormBadge(props: IToFormBadgeProps) {
  const { videoCurrentTime } = props;
  const [pos, setPos] = React.useState(-251);

  React.useEffect(() => {
    if (videoCurrentTime && videoCurrentTime > 5) {
      setPos(0);
    }
  }, [videoCurrentTime]);

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
