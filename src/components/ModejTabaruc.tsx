"use client";
import { Usedata } from "@/context/XisaabContex";
import { motion } from "framer-motion";
import Tabaruc from "./Tabaruc";
const ModelTabruc = () => {
  const { activeModelTabaruc, ModelT } = Usedata();
  return (
    <>
      {ModelT && (
        <motion.div
          onClick={activeModelTabaruc}
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

export default ModelTabruc;
