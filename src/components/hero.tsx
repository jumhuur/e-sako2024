import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="text_hero">
          <h2>Ku xisaabso E-zako Sakadada Si Waafaqsan Shareecada</h2>
          <p>
            Waxaa shabakada ku xisaabsaday sako in ka badan (<span>564</span>)
            qof{" "}
          </p>
        </div>
        <button type="button">
          <i className="fa-solid fa-square-root-variable"></i> Xisaabi Sako
        </button>
        <Image
          className="her_icons"
          src={"/images/xagal2.png"}
          width={40}
          height={40}
          alt="icons"
        />
        <Image
          className="her_icons"
          src={"/images/xagal2.png"}
          width={40}
          height={40}
          alt="icons"
        />

        <Image
          className="her_icons"
          src={"/images/o.png"}
          width={40}
          height={40}
          alt="icons"
        />
        <Image
          className="her_icons"
          src={"/images/o.png"}
          width={40}
          height={40}
          alt="icons"
        />
        <Image
          className="her_icons"
          src={"/images/line.png"}
          width={40}
          height={40}
          alt="icons"
        />

        <Image
          className="her_icons"
          src={"/images/x2.png"}
          width={40}
          height={40}
          alt="icons"
        />
      </div>
    </>
  );
};

export default Hero;
