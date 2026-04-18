import { layout, animation } from "../../styles/classNames";

const Hero = () => {
  return (
    <div
      id="hero"
      className={`${layout.section} flex items-center justify-center h-screen`}
    >
      <div className="text-center">
        {/* タイトル */}
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${animation.fadeIn}`}
        >
          歌ってみたを、
          <br />
          プロの音へ。
        </h1>

        {/* サブ */}
        <p
          className={`text-lg md:text-xl mb-8 text-gray-600 ${animation.fadeIn}`}
          style={{ animationDelay: "0.3s" }}
        >
          MIX / Mastering Engineer - える
        </p>

        {/* ボタン */}
        <a
          href="#portfolio"
          className={`inline-block px-6 py-3 bg-black text-white rounded-full transition hover:scale-105 ${animation.fadeIn}`}
          style={{ animationDelay: "0.6s" }}
        >
          実績を見る
        </a>
      </div>
    </div>
  );
};

export default Hero;