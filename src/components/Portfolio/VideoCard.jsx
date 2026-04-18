import { useState, useRef } from "react";
import PropTypes from "prop-types";

const VideoCard = ({ youtubeId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);
  const isHoverable = window.matchMedia("(hover: hover)").matches;

  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  // PC hover再生
  const handleMouseEnter = () => {
    if (isHoverable) {
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverable) {
      setIsPlaying(false);
    }
  };

  // スマホタップ再生
  const handleClick = () => {
    if (!isHoverable) {
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md transition transform hover:scale-105 hover:-translate-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {!isPlaying ? (
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full aspect-video object-cover"
        />
      ) : (
        <iframe
          ref={iframeRef}
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=${
            isMuted ? 1 : 0
          }&controls=1&modestbranding=1`}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}

      {/* スピーカー */}
      {isPlaying && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
          className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      )}
    </div>
  );
};

VideoCard.propTypes = {
  youtubeId: PropTypes.string.isRequired,
};

export default VideoCard;