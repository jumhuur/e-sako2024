import Image from "next/image";

const Sponserer = () => {
  return (
    <>
      <div className="sponser">
        <div className="text_sponser">
          <h2>Waxaa suura galiyay shabakadan</h2>
          <p>Shirkadan Hoose</p>
        </div>
        <div className="sponser_com_logos">
          <div className="logo_shirkad">
            <Image
              src={"/images/mci.svg"}
              alt="sponserv"
              width={100}
              height={100}
            />
          </div>
          <div className="logo_shirkad">
            <Image
              src={"/images/MOH.svg"}
              alt="sponserv"
              width={100}
              height={100}
            />
          </div>
          <div className="logo_shirkad">
            <Image
              src={"/images/dahab.svg"}
              alt="sponserv"
              width={100}
              height={100}
            />
          </div>
          <div className="logo_shirkad">
            <Image
              src={"/images/logo.png"}
              alt="sponserv"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponserer;
