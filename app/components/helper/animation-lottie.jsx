"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  return (
    <Lottie
      animationData={animationPath} // Pass the animation data
      loop={true}
      autoplay={true}
      style={{ width: width || "95%" }} // Dynamic width, default to 95%
    />
  );
};

export default AnimationLottie;
