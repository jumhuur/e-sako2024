import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="haye">
          <div className="footer_cointainer">
            <div className="parts_footer">
              <div className="logo_footer">
                <Image
                  src={"/images/Logo2.png"}
                  alt="Esako"
                  width={60}
                  height={60}
                />
                <h2>E-zako</h2>
              </div>
              <div className="info_footer">
                <p className="pp_foter">
                  {" "}
                  <span>&#169;</span> 2024 Design & dev Eng Jumhuur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
