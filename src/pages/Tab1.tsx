import React from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import data from "../data";
import Row from "../components/Row";
import requests from "../api";

import TrendingSlider from "../components/TrendingSlider";
import { notifications, search } from "ionicons/icons";


const Tab1: React.FC = () => {




  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding">

        <IonToolbar color={'dark'}>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="secondary">
            <IonButton shape="round" mode="ios">
              <IonIcon slot="start" icon={notifications} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonRow className="ion-margin">
          <IonCol style={{ fontWeight: "600", fontSize: "1.7rem" }}>
            Featured<br />
            Top Movies
          </IonCol>
          <IonCol size="2" className="flex-centered">
            <IonButton color="light" mode="ios" style={{ height: "110%", borderRadius: "20px" }}>
              <IonIcon icon={search} size="large"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>


        <div className="ion-padding-bottom">
          <TrendingSlider title="Trending Now" fetchURL={requests.fetchTrending} />
          <Row
            title="NETFLIX ORIGINALS"
            fetchURL={requests.fetchNetflixOriginals}
          />
          <Row title="Trending Now" fetchURL={requests.fetchTrending} />
          <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
          <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
