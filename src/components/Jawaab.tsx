"use client";
import Lottie from "lottie-react";
import animationData from "../../public/images/thanks.json";
import { motion } from "framer-motion";
const JawaabSako = () => {
  return (
    <>
      <motion.div className="thanksreviews">
        <div className="animationimage">
          <Lottie animationData={animationData} />
        </div>
        <div className="qoraal">
          <h2>Waxaa ka Baxaya</h2>
          <h3 className="jawaab_h3">{645} Neef</h3>
          <h4>Shuuradaha Sakadaada</h4>
          <p className="shuruudo">Qiimayntaada waan hellnay</p>
          <p className="shuruudo">Qiimayntaada waan hellnay</p>
          <p className="shuruudo">Qiimayntaada waan hellnay</p>
          <p className="shuruudo">Qiimayntaada waan hellnay</p>
        </div>
        <div className="btns_jawaab">
          <button type="button">Download</button>
          <button type="button">Print(A4)</button>
        </div>
      </motion.div>
    </>
  );
};

export default JawaabSako;
