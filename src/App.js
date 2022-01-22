import "./App.css";
import React, { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";
import HeroBanner from "./HeroBanner";
import axios from "axios";
function App() {
  const [animeReq, setAnime] = useState([]);
  const [trendyAnimeReq, setTrendyAnime] = useState([]);
  useEffect(() => {
    const baseURL = "https://kitsu.io/api/edge/";
    const trendyAnime = `${baseURL}trending/anime`;
    const anime = `${baseURL}anime`;
    const promise1 = axios.get(trendyAnime);
    const promise2 = axios.get(anime);
    Promise.all([promise1, promise2])
      .then((res) => {
        setTrendyAnime(res[0].data.data);
        setAnime(res[1].data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {/* Nav */}
      {/* <HeroBanner animeList={trendyAnimeReq} /> */}
      <CarouselCard title={"Anime"} animeList={animeReq} />
      <CarouselCard title={"Trending Anime"} animeList={trendyAnimeReq} />
    </div>
  );
}

export default App;
