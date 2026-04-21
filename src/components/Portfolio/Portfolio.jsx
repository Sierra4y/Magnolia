import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { layout, text } from "../../styles/classNames";

const Portfolio = () => {
  const [youtubeIds, setYoutubeIds] = useState([]);

  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQxOYAdcK7_wy5u8rMj1EyrGHhMpo8txmAAtBcatcGQPrg7-gEwPiKgO_5UwF1ipfwNmop1dnoCx88e/pub?gid=0&single=true&output=csv")
      .then(res => res.text())
      .then(text => {
        const ids = text
          .split("\n")              // 改行で分割
          .map(id => id.trim())     // 空白削除
          .filter(id => id);        // 空除去

        console.log("IDs:", ids);

        setYoutubeIds(ids);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="portfolio" className={`${layout.section} py-16`}>
      <div className="w-full max-w-5xl mx-auto">
        <h2 className={`${text.title} text-center mb-10`}>
          Portfolio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {youtubeIds.map((id, index) => (
            <VideoCard key={index} youtubeId={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;