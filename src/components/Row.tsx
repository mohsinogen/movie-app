import { IonCol, IonIcon, IonRow, IonText } from "@ionic/react";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import data from "../data";
import Movie from "../interface/Movie";
import { chevronForward } from "ionicons/icons";

function Row({ title, fetchURL }: { title: string; fetchURL: string }) {
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
        <IonCol>
            <IonRow className="ion-align-items-center ion-justify-content-between">
                <IonCol size="8" className="ion-padding-start">
                    <IonText>
                        <h5>{title}</h5>
                    </IonText>
                </IonCol>
                <IonCol size="2" style={{textAlign:"center"}}>
                    <IonIcon size="large" color={"primary"} icon={chevronForward}></IonIcon>
                </IonCol>
            </IonRow>
            <IonRow className="card-row">
                {movies.map((item, index) => (
                    <IonCol size="4.5" key={index}>
                        <IonRow>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                src={require("../first.JPEG")}
                                //src={imageBaseURL + item.poster_path}
                                alt="poster"
                                className="poster-image"
                            />
                        </IonRow>
                        {/*<IonRow><h6>{item.title || item.original_title || item.name || item.original_name}</h6></IonRow>*/}{" "}
                    </IonCol>
                ))}
            </IonRow>
        </IonCol>
    );
}

export default Row;
