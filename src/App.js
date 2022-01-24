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
    const anime = `${baseURL}anime?page[limit]=20&page[offset]=0`;
    const anime2010 = `${baseURL}anime?page[limit]=20&page[offset]=1`
    const promise1 = axios.get(trendyAnime);
    const promise2 = axios.get(anime);
    const promise3 = axios.get(anime2010)
    Promise.all([promise1, promise2, promise3])
      .then((res) => {
        setTrendyAnime(res[0].data.data);
        setAnime(() => {
          let listAnime = res[1].data.data; 
          let animelist2010 = res[2].data.data
          return [ ...listAnime, ...animelist2010 ]
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
console.log(animeReq)
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
