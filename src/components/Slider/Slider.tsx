import React from "react";
import "./slider.scss";

const step = 1280;

function Slider() {
  const images = ["./slides/1.png", "./slides/2.png", "./slides/3.png"];
  const [pos, setPos] = React.useState(0);

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
    <div className="slider">
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(${pos}px)` }}
      >
        {images.map((img) => (
          <img src={img} alt="slide" />
        ))}
      </div>
      <div className="slider__arrows">
        <button type="button" onClick={() => prevSlide()}>
          <svg
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.7348 13.3217C8.10941 13.7275 8.0841 14.3602 7.67828 14.7348C7.27246 15.1094 6.6398 15.0841 6.2652 14.6783L7.7348 13.3217ZM1 7.5L0.265197 8.17828C-0.0883988 7.79522 -0.0883988 7.20478 0.265197 6.82172L1 7.5ZM6.2652 0.32172C6.6398 -0.0841007 7.27246 -0.109407 7.67828 0.265197C8.0841 0.6398 8.10941 1.27246 7.7348 1.67828L6.2652 0.32172ZM6.2652 14.6783L0.265197 8.17828L1.7348 6.82172L7.7348 13.3217L6.2652 14.6783ZM0.265197 6.82172L6.2652 0.32172L7.7348 1.67828L1.7348 8.17828L0.265197 6.82172Z"
              fill="black"
            />
          </svg>
        </button>
        <button type="button" onClick={() => nextSlide()}>
          <svg
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.265196 13.3217C-0.109407 13.7275 -0.0841007 14.3602 0.32172 14.7348C0.72754 15.1094 1.3602 15.0841 1.7348 14.6783L0.265196 13.3217ZM7 7.5L7.7348 8.17828C8.0884 7.79522 8.0884 7.20478 7.7348 6.82172L7 7.5ZM1.7348 0.321719C1.3602 -0.0841007 0.72754 -0.109407 0.32172 0.265196C-0.0841007 0.6398 -0.109407 1.27246 0.265196 1.67828L1.7348 0.321719ZM1.7348 14.6783L7.7348 8.17828L6.2652 6.82172L0.265196 13.3217L1.7348 14.6783ZM7.7348 6.82172L1.7348 0.321719L0.265196 1.67828L6.2652 8.17828L7.7348 6.82172Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
