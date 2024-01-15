"use client";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/images/Animation - 1699276986746.json";

const ThanksReviewer = () => {
  return (
    <>
      <div className="thanksreviews">
        <div className="animationimage">
          <Lottie animationData={animationData} />
        </div>
        <div className="qoraal">
          <h3>Mahadsanid </h3>
          <p>Qiimayntaada waan hellnay</p>
        </div>
      </div>
    </>
  );
};

export default ThanksReviewer;
