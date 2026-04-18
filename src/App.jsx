import Hero from "./components/Hero/Hero";
import Profile from "./components/Profile/Profile";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import Contact from "./components/Contact/Contact";

import Sidebar from "./components/Navigation/Sidebar";
import MobileNav from "./components/Navigation/MobileNav";

import { colors } from "./styles/classNames";
import "./styles/scroll.css";

function App() {
    return (
    <div className={`${colors.bg} flex`}>
      {/* PCサイドバー */}
      <Sidebar />

      {/* メイン */}
      <div className="flex-1 md:ml-64">
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
          <section id="portfolio" className="snap-section">
            <Portfolio />
          </section>
          <section id="price" className="snap-section">
            <Price />
          </section>
          <section id="contact" className="snap-section">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;