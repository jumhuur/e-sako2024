"use client";
import { Usedata } from "@/context/XisaabContex";
import { motion } from "framer-motion";
import React from "react";
import Spiner from "./Spiner";
const Xisaabcom = () => {
  const {
    allow_xisaab,
    Nooc,
    setNooc,
    setNDahab,
    NDahab,
    setq_isku_jir,
    q_isku_jir,
    setq_bixid,
    q_bixid,
    Xadiga,
    seXadiga,
    AcLoading,
    Diyaariye,
    setcancel,
  } = Usedata();
  const XisaabiHada = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    Diyaariye();
  };
  return (
    <>
      <motion.div
        className="Xisaabcom"
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <div className="section_xisaab">
          <form>
            <label>Dooro Nooca</label>
            <select
              value={Nooc}
              name="Nooc"
              onInput={(e) => setcancel(false)}
              onChange={(e) => setNooc(e.target.value)}
            >
              <option value="Null" selected disabled>
                Dooro Nooc
              </option>
              <option value="Lacag">Lacag</option>
              <option value="Dahab">Dahab</option>
              <option value="Fido">Fido</option>
              <option value="Rikaas">Rikaas</option>
              <option value="Geel">Geel</option>
              <option value="Lo,a">Lo,a</option>
              <option value="Adhi">Adhi</option>
              <option value="Midho">Midho</option>
            </select>
            {Nooc === "Dahab" && (
              <div className="dahab_n">
                <>
                  <label>Dooro Nooca Dahabka</label>
                  <select
                    value={NDahab}
                    onChange={(e) => setNDahab(e.target.value)}
                    className="n_dahab"
                    name="dahab"
                    required
                  >
                    <option value="24">24</option>
                    <option value="22">22</option>
                    <option value="21">21</option>
                    <option value="20">20</option>
                    <option value="18">18</option>
                  </select>
                </>
              </div>
            )}

            {Nooc === "Midho" && (
              <>
                <div className="checkh_box">
                  <h2>Dooro Sida Uu Ku Baxay </h2>
                  <div className="doorasho">
                    <div className="gaar">
                      <input
                        onChange={(e) => setq_bixid(e.target.value)}
                        id="b_kharash"
                        type="radio"
                        value="b_kh"
                        name="1"
                        required
                      />
                      <label htmlFor="b_kharash">Bilaa Kharash</label>
                    </div>
                    <div className="gaar">
                      <input
                        onChange={(e) => setq_bixid(e.target.value)}
                        id="Kharash"
                        type="radio"
                        value="kha"
                        required
                        name="1"
                      />
                      <label htmlFor="Kharash">Kharash</label>
                    </div>
                    <div className="gaar">
                      <input
                        onChange={(e) => setq_bixid(e.target.value)}
                        id="Isku_jir"
                        type="radio"
                        value="isk"
                        required
                        name="1"
                      />
                      <label htmlFor="Isku_jir">Isku Jir</label>
                    </div>
                  </div>
                </div>
                {q_bixid === "isk" && (
                  <div className="dahab_n">
                    <>
                      <label>Dooro Qaaka Isku Jir</label>
                      <select
                        onChange={(e) => setq_isku_jir(e.target.value)}
                        className="n_dahab"
                        name="dahab"
                        required
                        value={q_isku_jir}
                      >
                        <option value="50%">Si Isleeg</option>
                        <option value="sh_70%">Kharashka Badan</option>
                        <option value="shla_30%">Kharash La,aanta Yar</option>
                      </select>
                    </>
                  </div>
                )}
              </>
            )}

            <label>Qor Xadiga</label>
            <input
              onChange={(e) => seXadiga(e.target.value)}
              type="text"
              placeholder="Qor xadiga .."
              value={Xadiga}
              onInput={(e) => setcancel(false)}
            />
            <div className="btn_actions">
              {!AcLoading && (
                <button onClick={XisaabiHada} className="xisaabi" type="submit">
                  Xisaabi Hada
                </button>
              )}

              {AcLoading && (
                <button disabled className="xisaabi spiners_btn" type="submit">
                  <Spiner />
                </button>
              )}
              <button onClick={allow_xisaab} className="ka_noqo" type="button">
                Ka Noqo
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Xisaabcom;
