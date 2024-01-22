"use client";
import Lottie from "lottie-react";
import animationData from "../../public/images/thanks.json";
import animationData2 from "../../public/images/qalad.json";
import { motion } from "framer-motion";
import { Usedata } from "@/context/XisaabContex";
import CountUp from "react-countup";
const JawaabSako = () => {
  const {
    Shardi1,
    Shardi2,
    Shardi3,
    jawaab,
    allow_Jawaab,
    xadid_sh,
    Mufti,
    cancel,
  } = Usedata();
  return (
    <>
      <motion.div className="thanksreviews">
        <div className="animationimage">
          <span className="qalad">
            {cancel && <Lottie animationData={animationData2} />}
          </span>

          {!cancel && <Lottie animationData={animationData} />}
        </div>
        <div className="qoraal">
          <h2>{Mufti}</h2>
          <h3 className="jawaab_h3">
            <span>
              {jawaab} {xadid_sh}
            </span>
          </h3>
          <div className="shuruud_title">
            <h4 className="title_sh">Shuuradaha Sakadaada</h4>
            <p className="shuruudo">
              <i className="fa-solid fa-check"></i> {Shardi1}
            </p>
            <p className="shuruudo">
              <i className="fa-solid fa-check"></i> {Shardi2}
            </p>
            <p className="shuruudo">
              <i className="fa-solid fa-check"></i> {Shardi3}
            </p>
          </div>

          {/* <p className="shuruudo">Qiimayntaada waan hellnay</p> */}
        </div>
        <div className="btns_jawaab">
          <button type="button">
            <i className="fa-solid fa-print"></i> Print(A4)
          </button>
          <button onClick={allow_Jawaab} className="ka_noqo" type="button">
            Ka Noqo
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default JawaabSako;
