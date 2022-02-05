import React from "react";
import "./qrBadge.scss";

function QrBadge() {
  return (
    <div className="qrBadge">
      <p>{`Сканируйте QR-код\nДЛЯ ПОЛУЧЕНИЯ\nДОПОЛНИТЕЛЬНОЙ\nИНФОРМАЦИИ`}</p>
      <img className="qrBadge__image" src="./qr.png" alt="qr code" />
    </div>
  );
}

export default QrBadge;
