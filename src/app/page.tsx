import About from "@/components/AboutUs";
import Ayad from "@/components/Ayad";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Mashaariic from "@/components/Mashaariic";
import ModelTabaruc from "@/components/ModejTabaruc";
import ModelJawaab from "@/components/ModelJawaab";
import Dhaqdhaqaaq from "@/components/dhaqdhaqaaq";
import ModelProjectDetails from "@/components/modelProDetails";
import Nav from "@/components/nav";
import Rate from "@/components/rate";
import Reviews from "@/components/reviews";
import Sponserer from "@/components/saponserv";
export default function Home() {
  return (
    <main>
      {/* <ModelProjectDetails /> */}
      <ModelProjectDetails />

      <ModelJawaab />
      <ModelTabaruc />
      <div className="haye">
        <Nav />
        <HomePage />
        <Sponserer />
        <Ayad />
        <Mashaariic />
        <Dhaqdhaqaaq />
        <About />
        <Reviews />
        <Rate />
        <Footer />
      </div>
    </main>
  );
}
