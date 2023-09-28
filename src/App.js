import { useTranslation } from "react-i18next";
import Banner from "./components/banner";
import Features from "./components/features";
import Hero from "./components/hero";
import Header from "./components/ui/header";
import Block from "./components/block";
import Footer from "./components/ui/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Banner />
      <Header />
      <Hero />
      <Features />
      <Block />
      <Footer />
    </div>
  );
}

export default App;
