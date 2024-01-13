"use client";
import Image from "next/image";
import Xisaabcom from "./Xisaabcon";
import { useState } from "react";
import { Usedata } from "@/context/XisaabContex";
import { motion } from "framer-motion";
const Hero = () => {
  const { xisaab, allow_xisaab } = Usedata();
  return (
    <>
      <motion.div
        className="hero"
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <Image
          className="her_icons kaw"
          src={"/images/xagal2.png"}
          width={40}
          height={40}
          alt="icons"
        />
        <Image
          className="her_icons laba"
          src={"/images/xagal2.png"}
          width={40}
          height={40}
          alt="icons"
        />

        <Image
          className="her_icons sadex"
          src={"/images/o.png"}
          width={40}
          height={40}
          alt="icons"
        />
        <Image
          className="her_icons afar"
          src={"/images/o.png"}
          width={40}
          height={40}
          alt="icons"
        />
        <Image
          className="her_icons shan"
          src={"/images/line.png"}
          width={40}
          height={40}
          alt="icons"
        />

        <Image
          className="her_icons lix"
          src={"/images/x2.png"}
          width={40}
          height={40}
          alt="icons"
        />
        {!xisaab ? (
          <>
            <motion.div
              className="text_hero"
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              <h2>Ku xisaabso E-zako Sakadada Si Waafaqsan Shareecada</h2>
              <p>
                Waxaa shabakada ku xisaabsaday sako in ka badan (
                <span>564</span>) qof{" "}
              </p>
            </motion.div>
            <button type="button" onClick={allow_xisaab}>
              <i className="fa-solid fa-square-root-variable"></i> Xisaabi Sako
            </button>
          </>
        ) : (
          <>
            <Xisaabcom />
          </>
        )}
      </motion.div>
    </>
  );
};

export default Hero;
