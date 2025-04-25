import React from "react";
import { useFetchnowplayingmovies } from "../utils/useFetchnowplayingmovies";

import { useSelector } from "react-redux";
import Herotext from "./Herotext";
import Bgvideo from "./Bgvideo";

const Herosection = () => {
  useFetchnowplayingmovies();

  const nowPlayingMovie = useSelector((store) => store.movie.nowPlayingMovies);

  if (nowPlayingMovie == undefined) return;

  console.log(nowPlayingMovie[0]);

  return (
    <div className="text-white absolute top-0 z-10 w-full aspect-video">
      <Herotext
        title={nowPlayingMovie[0].original_title}
        overview={nowPlayingMovie[0].overview}
      />
      <Bgvideo id={nowPlayingMovie[0].id} />
      <div className="w-full aspect-video bg-black opacity-50 absolute top-0 z-10"></div>
    </div>
  );
};

export default Herosection;
