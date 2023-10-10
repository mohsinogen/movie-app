import { IonCol, IonRow } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import axios from "../axios"

function Row({ title, fetchURL }: { title: string, fetchURL: string }) {

    interface Movie {
        adult: boolean;
        backdrop_path: string;
        id: number;
        name: string;
        original_language: string;
        original_name: string;
        original_title: string;
        title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        first_air_date: Date;
        vote_average: number;
        vote_count: number;
        origin_country: string[];
    }

    const [movies, setMovies] = useState<Movie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const imageBaseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    return (
        <IonRow className="card-row">
            {movies.map((item, index) => (
                <IonCol size="4.5" key={index}>
                    <IonRow>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            //src={require("../first.JPEG")}
                            src={imageBaseURL + item.poster_path}
                            alt="poster"
                            className="poster-image"
                        />
                    </IonRow>
                    <IonRow><h6>{item.title || item.original_title || item.name || item.original_name}</h6></IonRow>
                </IonCol>
            ))}
        </IonRow>
    )
}

export default Row
