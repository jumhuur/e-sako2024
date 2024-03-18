"use client";
import { Usedata } from "@/context/XisaabContex";
import JawaabSako from "./Jawaab";

const ModelJawaab = () => {
  const { Jawaab } = Usedata();
  return (
    <>
      <div className={!Jawaab ? "ModelJawaab" : "ModelJawaab active"}>
        <div className="meesha_jawaabta">
          <JawaabSako />
        </div>
      </div>
    </>
  );
};

export default ModelJawaab;
