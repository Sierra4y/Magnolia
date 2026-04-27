import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { layout, text } from "../../styles/classNames";

const Portfolio = () => {
  const [maleIds, setMaleIds] = useState([]);
  const [femaleIds, setFemaleIds] = useState([]);
  const [collabIds, setCollabIds] = useState([]);

  const [indexes, setIndexes] = useState({
    male: 0,
    female: 0,
    collab: 0,
  });

  const fetchIds = (url, setter) => {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        const ids = text
          .split("\n")
          .map(id => id.trim())
          .filter(id => id);

        setter(ids);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchIds(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxOYAdcK7_wy5u8rMj1EyrGHhMpo8txmAAtBcatcGQPrg7-gEwPiKgO_5UwF1ipfwNmop1dnoCx88e/pub?gid=0&single=true&output=csv",
      setMaleIds
    );

    fetchIds(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxOYAdcK7_wy5u8rMj1EyrGHhMpo8txmAAtBcatcGQPrg7-gEwPiKgO_5UwF1ipfwNmop1dnoCx88e/pub?gid=598510726&single=true&output=csv",
      setFemaleIds
    );

    fetchIds(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxOYAdcK7_wy5u8rMj1EyrGHhMpo8txmAAtBcatcGQPrg7-gEwPiKgO_5UwF1ipfwNmop1dnoCx88e/pub?gid=445353148&single=true&output=csv",
      setCollabIds
    );
  }, []);

  const updateIndex = (section, newIndex) => {
    setIndexes(prev => ({
      ...prev,
      [section]: newIndex,
    }));
  };

  const renderSection = (title, ids, sectionKey) => {
    if (!ids.length) return null;

    const current = indexes[sectionKey];
    const prev =
      current === 0 ? ids.length - 1 : current - 1;

    const next =
      current === ids.length - 1 ? 0 : current + 1;

    return (
      <div className="mb-16">
        <h3 className="text-xl font-medium tracking-wide text-gray-700 text-center mb-6">
          {title}
        </h3>

        <div className="w-12 h-px bg-gray-300 mx-auto mb-8"></div>

        <div className="md:hidden flex items-center justify-center gap-2">

          <button
            onClick={() =>
              updateIndex(sectionKey, prev)
            }
            className="text-2xl text-gray-400"
          >
            ‹
          </button>

          <div
            className="w-20 opacity-60 cursor-pointer"
            onClick={() => updateIndex(sectionKey, prev)}
          >
            <img
            src={`https://img.youtube.com/vi/${ids[prev]}/hqdefault.jpg`}
            alt=""
            className="w-full aspect-video object-cover rounded-xl shadow"
            />
          </div>

          <div className="w-40">
            <VideoCard youtubeId={ids[current]} />
          </div>

          <div
            className="w-20 opacity-60 cursor-pointer"
            onClick={() => updateIndex(sectionKey, next)}
          >
            <img
            src={`https://img.youtube.com/vi/${ids[next]}/hqdefault.jpg`}
            alt=""
            className="w-full aspect-video object-cover rounded-xl shadow"
            />
          </div>

          <button
            onClick={() =>
              updateIndex(sectionKey, next)
            }
            className="text-2xl text-gray-400"
          >
            ›
          </button>

        </div>

        <div className="hidden md:grid grid-cols-4 gap-6">
          {ids.map((id,index)=>(
            <VideoCard
              key={index}
              youtubeId={id}
            />
          ))}
        </div>

      </div>
    );
  };

  return (
    <div id="portfolio" className={`${layout.section} py-16`}>
      <div className="w-full max-w-5xl mx-auto">

        <h2 className={`${text.title} text-center mb-12`}>
          Portfolio
        </h2>

        {renderSection(
          "Male Vocal Mixes",
          maleIds,
          "male"
        )}

        {renderSection(
          "Female Vocal Mixes",
          femaleIds,
          "female"
        )}

        {renderSection(
          "Collaborative Mixes",
          collabIds,
          "collab"
        )}

      </div>
    </div>
  );
};

export default Portfolio;