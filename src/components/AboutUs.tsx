import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="qayb qoraal">
          <h2>ku sabsan shabakada E-zako</h2>
          <p>
            Shabakada E-Sako.Web.App, Waa #1 Shabakadii Ugu Horaysay Guud Ahaan
            Gayiga Soomalida, Ee Kuu Xisaabinaysa Noocyada Kala Duwan Ee Sakadda
            (Geel, Adhi, {"Lo'"} Iyo Dahab), Taas Oo Loo Raacayo Si Waafaqsan
            Mad-Habka Shaaficiga, Waxayna Si Toosa Ula Shaqayanaysaa Oo Ay Ku
            Xidhantahay Shabakada Caalamiga Ee Qaabilsan Qiimaha Dahabka, Iyada
            Oo La Isticmaalayo IPA-Ga Shabakadaas, Waxa Aad Ka Eegi Kartaa
            Shabakada E-Sako, Maalin Walba Halka Uu Marayo Qiimaha Noocyada Kala
            Duwan Ee Dahabka Sida:- 24, 22, 21 , 20, 18 Qiimayaashan Oo
            Isbadalkoodu Uu Oo Isbadalayo Daqiiqad Walba.
          </p>
        </div>
        <div className="qayb sawir">
          <Image src={"/images/one1.svg"} alt="one" fill={true} />
        </div>
      </div>
    </>
  );
};

export default About;
