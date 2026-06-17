import Female from "../components/Home/Female";
import Flavour from "../components/Home/Flavour";
import Footer from "../components/Home/Footer";
import Hear from "../components/Home/Hear";
import Hero from "../components/Home/Hero";
// import Special from "../components/Home/Special";

function Home() {
  return (
    <main className="w-full h-fit min-h-full pt-[140px]">
      <Hero />
      <Female />
      <Flavour />
      {/* <Special /> */}
      <Hear />
      <Footer />
    </main>
  );
}

export default Home;
