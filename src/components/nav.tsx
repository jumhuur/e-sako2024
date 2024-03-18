import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <>
      <div className="navraber">
        <div className="navlinks">
          <div className="logo">
            <Link href={"/"}>
              <Image
                src={"/images/Logo2.png"}
                alt="Esako"
                width={60}
                height={60}
              />
              E-sako
            </Link>
          </div>
          <div className="mobile_menue">
            <button type="button" className="action_nav">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Qiimayasha</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Xisaabinta</Link>
              </li>
            </ul>
            <div className="btn_actions">
              <button type="button" className="action_nav">
                Tabaruc
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
