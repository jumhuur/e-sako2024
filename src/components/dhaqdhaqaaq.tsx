import Image from "next/image";

const Dhaqdhaqaaq = () => {
  return (
    <>
      <div id="About" className="qiimayasha">
        <div className="text_an_title">
          <h2>
            Maxay tahay shabakada E-sako sidayse ?
            <br />U shaqaysaaa ?
          </h2>
        </div>
        <div className="liiska_noocyada">
          <div className="nooc">
            <div className="icon">
              <Image
                src={"/images/link.png"}
                alt="dahab_icon"
                width={50}
                height={50}
              />
            </div>
            <div className="qiimaha">
              {/* <h2>Api</h2> */}
              <p>
                Shabakada E-zako waxay si toosa ula shaqaynaysaa Api-yada
                Calamka ee soo gudbiya Qiima dahabka si Live ah
              </p>
            </div>
            <div className="live"></div>
          </div>
          <div className="nooc">
            <div className="icon">
              <Image
                src={"/images/islam.png"}
                alt="dahab_icon"
                width={50}
                height={50}
              />
            </div>
            <div className="qiimaha">
              {/* <h2>Sharecada Islaamka</h2> */}
              <p>
                E-zako waxay Kuu xisaabinaysaa noocyada xoolaha sakada laga
                qaado sida geela adhiga {"lo'da"} dahabka Lacagta & waliba midha
              </p>
            </div>
            <div className="live"></div>
          </div>
          <div className="nooc">
            <div className="icon">
              <Image
                src={"/images/dhq_dahab.png"}
                alt="dahab_icon"
                width={50}
                height={50}
              />
            </div>
            <div className="qiimaha">
              {/* <h2>Api</h2> */}
              <p>
                waxaad si live-ah ugala socon kartaa noocyada kala duwan ee
                dahab-ka qiimaha ay maryaaan Mar walba
              </p>
            </div>
            <div className="live"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dhaqdhaqaaq;
