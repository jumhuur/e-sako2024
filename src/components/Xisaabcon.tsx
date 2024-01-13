"use client";
import { Usedata } from "@/context/XisaabContex";
import { motion } from "framer-motion";
const Xisaabcom = () => {
  const { allow_xisaab } = Usedata();
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
            <select name="Nooc">
              <option value="Lacag">Lacag</option>
              <option value="Dahab">Dahab</option>
              <option value="Fido">Fido</option>
              <option value="Rikaas">Rikaas</option>
              <option value="Geel">Geel</option>
              <option value="Lo,a">Lo,a</option>
              <option value="Adhi">Adhi</option>
              <option value="Midho">Midho</option>
            </select>
            {/* <div className="dahab_n">
              <>
                <label>Dooro Nooca Dahabka</label>
                <select className="n_dahab" name="dahab" required>
                  <option value="24">24</option>
                  <option value="22">22</option>
                  <option value="21">21</option>
                  <option value="20">20</option>
                  <option value="18">18</option>
                </select>
              </>
            </div> */}
            {/* <div className="checkh_box">
              <h2>Dooro Sida Uu Ku Baxay </h2>
              <div className="doorasho">
                <div className="gaar">
                  <input
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
                    id="Isku_jir"
                    type="radio"
                    value="isk"
                    name="1"
                    required
                  />
                  <label htmlFor="Isku_jir">Isku Jir</label>
                </div>
              </div>
            </div> */}
            {/* <div className="dahab_n">
              <>
                <label>Dooro Qaaka Isku Jir</label>
                <select className="n_dahab" name="dahab" required>
                  <option value="50%">Si Isleeg</option>
                  <option value="sh_70%">Kharashka Badan</option>
                  <option value="shla_30%">Kharash La,aanta Yar</option>
                </select>
              </>
            </div> */}

            <label>Qor Xadiga</label>
            <input type="text" placeholder="Qor xadiga .." />
            <div className="btn_actions">
              <button className="xisaabi" type="submit">
                Xisaabi Hada
              </button>
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
