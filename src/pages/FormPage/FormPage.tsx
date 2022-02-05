import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import QrBadge from "../../components/QrBadge/QrBadge";
import { IFormState } from "../../models/FormModel";
import "./formPage.scss";

function FormPage() {
  const [form, setForm] = React.useState<IFormState>({
    number: ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    checkbox: false,
  });
  return (
    <div className="formPage">
      <Form form={form} setForm={setForm} />
      <img src="./formBg.png" alt="form background" />
      <QrBadge />
      <Link to="/">
        <button className="formPage__quit" type="button">
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
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="1.6576"
              y1="22.2223"
              x2="21.9392"
              y2="1.94067"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default FormPage;
