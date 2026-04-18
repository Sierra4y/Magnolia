import VideoCard from "./VideoCard";
import { layout, text } from "../../styles/classNames";

const videos = [
  {
    id: 1,
    youtubeId: "hzEFi35A6C8Zyex_",
  },
  {
    id: 2,
    youtubeId: "8hCAsz0r13rwgHkI",
  },
  {
    id: 3,
    youtubeId: "bwPB3S5O3-riUoVh",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className={`${layout.section}`}>
      <div className={layout.container}>
        <h2 className={text.title}>Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} youtubeId={video.youtubeId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;