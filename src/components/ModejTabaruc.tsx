"use client";
import { Usedata } from "@/context/XisaabContex";
import { motion } from "framer-motion";
import Tabaruc from "./Tabaruc";
const ModelJawaab = () => {
  const { activeModelTabaruc, ModelT } = Usedata();
  return (
    <>
      {ModelT && (
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className={"ModelJawaab active"}
        >
          <div className="meesha_jawaabta">
            <Tabaruc />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModelJawaab;
