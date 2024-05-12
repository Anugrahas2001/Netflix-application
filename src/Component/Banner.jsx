import React, { useState } from "react";

const Banner = () => {
  const [readMore, setReadMore] = useState(false);

  const paraStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <div className="Banner-container">
        <div className="shadow"></div>
      <div className="Banner-contents">
        <h1>Naruto</h1>
        <div className="buttons">
          <button className="play-btn">Play +</button>
          <button className="play-btn">Action</button>
        </div>
        <p style={readMore ? null : paraStyles}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque
          laborum id, magnam modi sit architecto, quaerat facilis tempore
          ducimus assumenda vero eos veniam. Amet, cupiditate hic. Tempora,
          quisquam iusto.
        </p>
        <label
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Read Less..." : "Read More..."}
          </label>
      </div>
    </div>
  );
};

export default Banner;
