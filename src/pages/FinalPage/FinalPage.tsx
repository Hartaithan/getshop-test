import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import keyBindings from "../../keys/keyboardBindings";
import "./finalPage.scss";

const step = 1280;

function FinalPage() {
  let navigate = useNavigate();
  const [pos, setPos] = React.useState(0);
  const images = ["./slides/1.png", "./slides/2.png", "./slides/3.png"];

  const handleKeyDown = React.useCallback(
    (e) => {
      switch (e.keyCode) {
        case keyBindings.KEY_LEFT:
          prevSlide();
          break;
        case keyBindings.KEY_RIGHT:
          nextSlide();
          break;
        case keyBindings.KEY_BACK:
          navigate("/form");
          break;
        default:
          break;
      }
    },
    [pos] // eslint-disable-line
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]); // eslint-disable-line

  function prevSlide() {
    if (pos < 0) {
      setPos(pos + step);
    }
  }

  function nextSlide() {
    const condition = -((images.length - 1) * step);
    if (pos > condition) {
      setPos(pos - step);
    }
  }

  return (
    <div className="finalPage">
      <Slider
        pos={pos}
        images={images}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
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
