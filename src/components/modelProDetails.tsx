"use client";
import { Usedata } from "@/context/XisaabContex";
import { motion } from "framer-motion";
const ModelProjectDetails = () => {
  const { ModelProjectactive, ModelProject } = Usedata();
  return (
    <>
      {ModelProject && (
        <motion.div
          onClick={ModelProjectactive}
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className={"ModelJawaab active"}
        >
          <div className="meesha_jawaabta details">
            <p>Halkan</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModelProjectDetails;
