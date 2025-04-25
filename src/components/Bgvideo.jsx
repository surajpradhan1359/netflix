import React, { useEffect, useState } from "react";
import { option } from "../utils/data";

const Bgvideo = ({ id }) => {
  let [trailer, setTrailer] = useState(null);
  const fetchVideoData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      option
    );
    const data = await response.json();
    let trailers = data.results.filter((obj) => obj.type == "Trailer");
    setTrailer(trailers);
  };
  useEffect(() => {
    fetchVideoData();
  }, []);
  if (trailer == null) return;
  return (
    <div className="absolute top-0 z-0 w-full aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${trailer[0].key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer[0].key}`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full aspect-video"
         allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default Bgvideo;
