import { layout, animation } from "../../styles/classNames";

const Hero = () => {
  return (
    <div
      id="hero"
      className={`${layout.section} flex items-center justify-center h-screen`}
    >
      <div className="text-center">
        <h1
          className={`text-3xl md:text-5xl leading-tight font-bold mb-6 ${animation.fadeIn}`}
        >
          あなたの“音”を、<br className="md:hidden" />
          作品に。
        </h1>

        <p
          className={`text-lg md:text-xl mb-8 text-gray-600 ${animation.fadeIn}`}
          style={{ animationDelay: "0.3s" }}
        >
          MIX / Mastering Engineer - マグノリア
        </p>

        <div className="flex justify-center gap-5 mt-6">
          <a
            href="https://x.com/magnolia_mix"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm bg-black text-white hover:opacity-80 transition"
          >
            X
          </a>

          <a
            href="https://t.co/POC7sZFfbn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm bg-black text-white hover:opacity-80 transition"
          >
            YouTube (playlist)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;