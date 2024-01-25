"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import ThanksReviewer from "./thanksReviewer";
import { useScroll, motion } from "framer-motion";
const Rate = () => {
  const [rate, setrate] = useState(false);
  const [loading, setloading] = useState(false);
  const [thanks, setthanks] = useState(false);
  const Ratechange = (): boolean => {
    setrate(true);
    return rate;
  };
  const reviewerthanks = (e: any) => {
    e.preventDefault();
    setthanks(true);
  };

  const Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: Ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <>
      <motion.div
        transition={{ duration: 2, type: "spring" }}
        className="home"
        ref={Ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
          transition: "duration: 2",
        }}
      >
        <div className="hero">
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
          <div className="text_hero">
            <h2 className="rate_title">
              Qiimee shabakada E-zako
              <br />
              Jawaabaheeda & qaabkeeda
            </h2>
          </div>
          {!rate && (
            <button type="button" onClick={Ratechange}>
              <i className="fa-solid fa-star-half-stroke"></i> Qiimee
            </button>
          )}
          {rate && (
            <>
              {!thanks ? (
                <>
                  <div className="input_rate">
                    <div className="xidigo">
                      <input type="radio" name="rate" id="rate1" />
                      <label htmlFor="rate1">
                        <i className="fa-solid fa-star"></i>
                      </label>
                      <input type="radio" name="rate" id="rate2" />
                      <label htmlFor="rate2">
                        <i className="fa-solid fa-star"></i>
                      </label>
                      <input type="radio" name="rate" id="rate3" />
                      <label htmlFor="rate3">
                        <i className="fa-solid fa-star"></i>
                      </label>
                      <input type="radio" name="rate" id="rate4" />
                      <label htmlFor="rate4">
                        <i className="fa-solid fa-star"></i>
                      </label>
                      <input type="radio" name="rate" id="rate5" />
                      <label htmlFor="rate5">
                        <i className="fa-solid fa-star"></i>
                      </label>
                    </div>
                    <form onSubmit={reviewerthanks}>
                      <textarea name="comment" maxLength={120} />
                      <button type="submit">
                        <i className="fa-solid fa-paper-plane"></i> Dir
                        Qiimaynta
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <ThanksReviewer />
              )}
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Rate;
