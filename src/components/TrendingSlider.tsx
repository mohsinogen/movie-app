import React, { useEffect, useState } from 'react'
import Movie from '../interface/Movie';
import data from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom  } from 'swiper/modules';
import axios from "../axios";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import './TrendingSlider.css';

function TrendingSlider({ title, fetchURL }: { title: string; fetchURL: string }) {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const imageBaseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            /* const request = await axios.get(fetchURL);
                  setMovies(request.data.results);
                  return request; */
            setMovies(data);
        }
        fetchData();
    }, [fetchURL]);

    return (

        <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]} slidesPerView={1} pagination={true}>
            {movies.slice(0,5).map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='ion-padding'>
                        <img style={{ borderRadius: "20px" }}
                            src={require("../test2.JPEG")}
                        //src={imageBaseURL + item.backdrop_path}

                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default TrendingSlider
