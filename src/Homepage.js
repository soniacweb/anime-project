import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Slider from './Slider'
const Homepage = () => {
    // const [anime, setAnime] = useState([]);
    const [trendyAnime, setTrendyAnime] = useState([]);
useEffect(() => {
    const trendyAnimeUrl = `https://kitsu.io/api/edge/trending/anime`;
    // const animeUrl = `https://kitsu.io/api/edge/anime`;
    const promise1 = axios.get(trendyAnimeUrl);
    // const promise2 = axios.get(animeUrl);
    Promise.all([promise1])
      .then((res) => {
        console.log(res[0].data.data);
        setTrendyAnime(res[0].data.data);
        // setAnime(res[1].data.data);
      })
      .catch((err) => {
        console.log(err);
      });
}, [])

    return (
        <div>
      {  trendyAnime.map(anime => {
          console.log(anime)
          return (
              <Slider
              anime={anime}
              />
          )
      })}
     
            {/* <h1>{anime}</h1> */}
            {/* <h1>{trendyAnime}</h1> */}
            {/* //header  */}
             {/* sliders  */}
             {/* sliders  */}
             {/* sliders  */}

        </div>
    )
}

export default Homepage
