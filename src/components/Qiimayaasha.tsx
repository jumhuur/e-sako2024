import Image from "next/image";

const Qiimayasha = () => {
  return (
    <>
      <div className="qiimayasha">
        <div className="text_an_title">
          <h2>
            Qiimaha dahabka kala soco E-sako daqiiqad
            <br />
            si live ayuu isku badalayaa
          </h2>
        </div>
        <div className="liiska_noocyada">
          <div className="nooc">
            <div className="icon">
              <Image
                src={"/images/dahab.png"}
                alt="dahab_icon"
                width={50}
                height={50}
              />
            </div>
            <div className="qiimaha">
              <h2>Nooca 24-ka</h2>
              <p>65.67$</p>
            </div>
            <div className="live"></div>
          </div>
          <div className="nooc">
            <div className="icon"></div>
            <div className="qiimaha">
              <h2>Nooca 24-ka</h2>
              <p>65.67$</p>
            </div>
            <div className="live"></div>
          </div>
          <div className="nooc">
            <div className="icon"></div>
            <div className="qiimaha"></div>
            <div className="live"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qiimayasha;
