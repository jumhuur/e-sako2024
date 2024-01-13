import About from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Dhaqdhaqaaq from "@/components/dhaqdhaqaaq";
import Nav from "@/components/nav";
import Over from "@/components/over";
import Rate from "@/components/rate";
import Reviews from "@/components/reviews";
import Sponserer from "@/components/saponserv";

export default function Home() {
  return (
    <main>
      {/* <Over /> */}
      <div className="haye">
        <Nav />
        <HomePage />
        <Sponserer />
        <Dhaqdhaqaaq />
        <About />
        <Reviews />
        <Rate />
        <Footer />
      </div>
    </main>
  );
}
