import React, { useEffect } from "react";

const Nowplaying = () => {
      //fetch
  const getNowPlayingMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTBjNTkwMTU5YzY0MTNmZmY2YmEyYzIxOGUwMmE1YSIsIm5iZiI6MTc0NDk0MDI5OC4xNTM5OTk4LCJzdWIiOiI2ODAxYWQwYTkxZDNmNjVjNWZhY2YxZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ajCRYgfSP5ZdQ0lN83Ckef2XPXLm0k6wmdp5fWJYJcw",
        },
      }
    );
    let data = await response.json();
    console.log(data);
  };
  useEffect(()=>{
    getNowPlayingMovies();
  },[])
  return <div className="text-black">Now Playing</div>;
};

export default Nowplaying;
