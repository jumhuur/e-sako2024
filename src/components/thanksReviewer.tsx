"use client";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/images/thanks.json";
import { motion } from "framer-motion";

const ThanksReviewer = () => {
  return (
    <>
      <motion.div className="thanksreviews">
        <div className="animationimage">
          <Lottie animationData={animationData} />
        </div>
        <div className="qoraal">
          <h3>Mahadsanid </h3>
          <p>Qiimayntaada waan hellnay</p>
        </div>
      </motion.div>
    </>
  );
};

export default ThanksReviewer;
