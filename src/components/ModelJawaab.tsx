"use client";
import { Usedata } from "@/context/XisaabContex";
import JawaabSako from "./Jawaab";
import { motion } from "framer-motion";
const ModelJawaab = () => {
  const { Jawaab } = Usedata();
  return (
    <>
      <div className={!Jawaab ? "ModelJawaab" : "ModelJawaab active"}>
        <>
          {Jawaab && (
            <motion.div
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="meesha_jawaabta"
            >
              <JawaabSako />
            </motion.div>
          )}
        </>
      </div>
    </>
  );
};

export default ModelJawaab;
