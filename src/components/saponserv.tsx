"use client";
import Image from "next/image";
import Moment from "moment";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const Sponserer = () => {
  const formatDate = Moment().format("DD-MM-YYYY");
  const date = new Date();
  return (
    <>
      <div id="Qiimayasha" className="sponser">
        <div className="text_sponser">
          <h2>Qiimaha Noocyada kala duwan ee dahabka</h2>
          <p>
            <i className="fa-solid fa-calendar-days"></i> Taariikhada :{" "}
            <span>{formatDate}</span> Hijri :{" "}
            <span>{date.toLocaleDateString("ar-SA")} </span>
          </p>
          {/* <p>
            <i className="fa-regular fa-clock"></i> Saacada :{" "}
            {date.toLocaleTimeString()}
          </p> */}
        </div>
        <div className="sponser_com_logos">
          <motion.div className="mid">
            <div className="icon">
              <Image
                src={"/images/dahab.png"}
                alt="sponserv"
                width={30}
                height={30}
              />
            </div>
            <div className="text_nooc">
              <h2>65.67 $</h2>
              <p>nooca 24-ka</p>
            </div>
          </motion.div>
          <motion.div className="mid">
            <div className="icon">
              <Image
                src={"/images/dahab.png"}
                alt="sponserv"
                width={30}
                height={30}
              />
            </div>
            <div className="text_nooc">
              <h2>54.67 $</h2>
              <p>nooca 22-ka</p>
            </div>
          </motion.div>
          <motion.div className="mid">
            <div className="icon">
              <Image
                src={"/images/dahab.png"}
                alt="sponserv"
                width={30}
                height={30}
              />
            </div>
            <div className="text_nooc">
              <h2>50.67 $</h2>
              <p>nooca 21-ka</p>
            </div>
          </motion.div>
          <motion.div className="mid">
            <div className="icon">
              <Image
                src={"/images/dahab.png"}
                alt="sponserv"
                width={30}
                height={30}
              />
            </div>
            <div className="text_nooc">
              <h2>48.67 $</h2>
              <p>nooca 20-ka</p>
            </div>
          </motion.div>
          <motion.div className="mid">
            <div className="icon">
              <Image
                src={"/images/dahab.png"}
                alt="sponserv"
                width={30}
                height={30}
              />
            </div>
            <div className="text_nooc">
              <h2>45.67 $</h2>
              <p>nooca 18-ka</p>
            </div>
          </motion.div>
          <motion.div className="mid fido">
            <div className="icon">
              <Image
                src={"/images/silver1.png"}
                alt="sponserv"
                width={30}
                height={30}
              />
            </div>
            <div className="text_nooc">
              <h2>0.67 $</h2>
              <p>Fido 1-G</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sponserer;
