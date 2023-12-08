import { IonCol, IonIcon, IonRow, IonText } from "@ionic/react";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import data from "../data";
import Movie from "../interface/Movie";
import { chevronForward } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Scrollbar } from "swiper/modules";
import './Row.css';

function Row({ title, fetchURL }: { title: string; fetchURL: string }) {
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
        <IonCol class="ion-no-padding">
            <IonRow className="ion-align-items-center ion-justify-content-between ion-no-padding">
                <IonCol size="8" className="ion-padding-start">
                    <IonText>
                        <h5>{title}</h5>
                    </IonText>
                </IonCol>
                <IonCol size="2" style={{ textAlign: "center" }}>
                    <IonIcon size="large" color={"primary"} icon={chevronForward}></IonIcon>
                </IonCol>
            </IonRow>
            <Swiper modules={[Autoplay, Keyboard, Scrollbar]}
                spaceBetween={15}
                slidesPerView={3.2}
                pagination={false}
                centeredSlides={false}
                slidesOffsetBefore={20}
            >
                {movies.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='ion-padding-vertical'>
                            <img className="movie-poster" style={{ borderRadius: "20px" }}
                               // src={require("../first.JPEG")}
                                src={imageBaseURL + item.poster_path}
                            />
                            <div
                                style={{ textAlign: "left" }}>

                                <IonText style={{ fontWeight: "bold", fontSize: "1rem" }}
                                    color={'light'}><br />{truncateString(item.original_name || item.original_title || '', 25)}
                                </IonText>
                                <br />
                                <IonText color={'medium'} style={{ fontSize: "small" }}>
                                    {item.release_date?.slice(0, 4)}
                                </IonText>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </IonCol>
    );
}

export default Row;
