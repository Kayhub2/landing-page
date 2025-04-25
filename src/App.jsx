
import "./App.css";
import { Contact } from "./Components/Contact";
import { Features } from "./Components/Features";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Info from "./Components/Info";

export default function App() {
  return (
    <div className="w-full bg-[#f0f8ff]">
      <div className="hero-background flex flex-col">
        <div className="w-full py-[10px] px-[50px] flex items-center justify-between">
          <Header/>
        </div>
        <Hero/>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  {/* content */}
</div>
      <Info />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
