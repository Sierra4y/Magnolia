import Hero from "./components/Hero/Hero";
import Profile from "./components/Profile/Profile";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import Form from "./components/Form/Form";
import About from "./components/About/About";
import Workflow from "./components/Workflow/Workflow";
import flower from "./assets/flower.png";

import Sidebar from "./components/Navigation/Sidebar";
import MobileNav from "./components/Navigation/MobileNav";

import { colors } from "./styles/classNames";
import "./styles/scroll.css";

function App() {
    return (
    <div className={`${colors.bg} flex relative overflow-hidden`}>
      <img
        src={flower}
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-80 md:w-[500px]
          opacity-10
          rotate-12
          pointer-events-none
          z-0
        "
      />
      {/* PCサイドバー */}
      <Sidebar />

      {/* メイン */}
      <div className="flex-1 md:ml-64 relative z-10">
        {/* スマホナビ */}
        <MobileNav />
        
        {/* コンテンツ */}
        <div className="snap-container pt-16 md:pt-0">
          <section id="hero" className="snap-section">
            <Hero />
          </section>
          <section id="profile" className="snap-section">
            <Profile />
          </section>
          <section id="about" className="snap-section">
            <About />
          </section>
          <section id="portfolio" className="snap-section">
            <Portfolio />
          </section>
          <section id="workflow" className="snap-section">
            <Workflow />
          </section>
          <section id="price" className="snap-section">
            <Price />
          </section>
          <section id="form" className="snap-section">
            <Form />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;