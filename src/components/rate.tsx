import Image from "next/image";

const Rate = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="text_hero">
            <h2 className="rate_title">
              Qiimee shabakada Esako
              <br />
              Jwaabaheeda & qaabkeeda
            </h2>
          </div>
          <button type="button">
            <i className="fa-solid fa-star-half-stroke"></i> Qiimee
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
      </div>
    </>
  );
};

export default Rate;
