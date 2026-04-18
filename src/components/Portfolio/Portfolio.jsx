import VideoCard from "./VideoCard";
import { layout, text } from "../../styles/classNames";

const Portfolio = () => {
  return (
    <div id="portfolio" className={`${layout.section} py-16`}>
      <div className="w-full max-w-3xl mx-auto">
        <h2 className={`${text.title} text-center`}>Portfolio</h2>

        <VideoCard youtubeId="KdHrVvvMV8E" />
      </div>
    </div>
  );
};

export default Portfolio;