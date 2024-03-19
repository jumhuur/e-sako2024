"use client";
import { Usedata } from "@/context/XisaabContex";
import { motion } from "framer-motion";
const ModelJawaab = () => {
  const { activeModelTabaruc, ModelT } = Usedata();
  return (
    <>
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className={!ModelT ? "ModelJawaab" : "ModelJawaab active"}
      >
        <div className="meesha_jawaabta">
          <p>Model Tabaruc</p>
        </div>
      </motion.div>
    </>
  );
};

export default ModelJawaab;
