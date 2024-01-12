import Image from "next/image";

const Sponserer = () => {
  return (
    <>
      <div className="sponser">
        <div className="text_sponser">
          <h2>Qiimaha Noocyada kala duwan ee dahabka</h2>
          <p>Taariikhada Maanta : 11-12-2024</p>
        </div>
        <div className="sponser_com_logos">
          <div className="mid">
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
          </div>
          <div className="mid">
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
          </div>
          <div className="mid">
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
          </div>
          <div className="mid">
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
          </div>
          <div className="mid">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponserer;
