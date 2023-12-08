import React, { useEffect, useState } from 'react'
import Movie from '../interface/Movie';
import data from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import axios from "../axios";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import './TrendingSlider.css';
import { IonText } from '@ionic/react';

function TrendingSlider({ title, fetchURL }: { title: string; fetchURL: string }) {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const imageBaseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
                   setMovies(request.data.results);
                   return request;
            //setMovies(data);
        }
        fetchData();
    }, [fetchURL]);

    function truncateString(inputString: string, length: number): string {
      
        if (inputString.length <= length) {
          return inputString;
        } else {
          return inputString.substring(0, length) + "...";
        }
      }
      
    return (

        <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar]}
            spaceBetween={15}
            slidesPerView={1.2}
            pagination={true}
            centeredSlides={true}
            slidesOffsetBefore={-10}
        >
            {movies.slice(0, 5).map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='ion-padding-vertical'>
                        <img style={{ borderRadius: "20px" }}
                            //src={require("../test2.JPEG")}
                        src={imageBaseURL + item.backdrop_path}

                        />
                        <div
                            style={{ textAlign: "left", position: "absolute", bottom: 35, left: 15 }}>

                            <IonText style={{ fontWeight: "bold" }}
                                color={'light'}><br />{truncateString(item.original_name || item.original_title || '', 25)}
                            </IonText>
                            <br />
                            <IonText color={'light'} style={{ fontSize: "small" }}>
                                {item.release_date?.slice(0,4)} 
                            </IonText>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default TrendingSlider
