import About from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Dhaqdhaqaaq from "@/components/dhaqdhaqaaq";
import Nav from "@/components/nav";
import Rate from "@/components/rate";
import Sponserer from "@/components/saponserv";

export default function Home() {
  return (
    <main>
      <div className="haye">
        <Nav />
        <HomePage />
        <Sponserer />
        <Dhaqdhaqaaq />
        <About />
        <Rate />
        <Footer />
      </div>
    </main>
  );
}
