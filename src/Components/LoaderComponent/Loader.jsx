import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <p>
        Still, sparkling, or shaken? We are on it
        <span className="dots">
          {Array(3)
            .fill(".")
            .map((dot, index) => (
              <span key={index}>{dot}</span>
            ))}
        </span>
      </p>

      <DotLottieReact
        src="https://lottie.host/d913498c-8abe-44cd-b8df-7f220234048c/q8ix52WPZL.lottie"
        loop
        autoplay
        speed={1.68}
        className="lottie-animation"
      />
    </div>
  );
};

export default Loader;
