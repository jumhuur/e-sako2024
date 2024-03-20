const Tabaruc = () => {
  return (
    <>
      <div className="tabaruc_compo">
        <div className="info_tabaruc">
          <div className="infoHawlaha">
            <h2>Hawlaha Shabakada Naga Taageer</h2>
            <p>
              Ku Tabaruc Waxii Aad Awoodo <br />
              Si Hawlaha Shabakada Loogu Qabto
              <br />
              hawlaha joogtada aha ee shabakada U
              <br />
              baahantahay Waa <span>70$</span> Bil Kasta
            </p>
            {/* <ul>
            <li>Hosting bishii : $7.50</li>
            <li>Domain Name Sanadkii : $15</li>
            <li>Dahab Api bishii : $70</li>
            Total : 92.5$
          </ul> */}
          </div>
          <div className="TabarucForm">
            <form>
              <div className="Paymets_style">
                <label htmlFor="">
                  <span>Zaad</span>
                </label>
                <label htmlFor="">
                  <span>E-dahab</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabaruc;
