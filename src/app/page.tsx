import HomePage from "@/components/HomePage";
import Qiimayasha from "@/components/Qiimayaasha";
import Nav from "@/components/nav";
import Sponserer from "@/components/saponserv";

export default function Home() {
  return (
    <main>
      <div className="haye">
        <Nav />
        <HomePage />
        <Sponserer />
        <Qiimayasha />
      </div>
    </main>
  );
}
