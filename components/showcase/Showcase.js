import { FaCalendar, FaYoutube } from "react-icons/fa";
import StyledShowcase from "./Showcase.styled";
import { useEffect, useState } from "react";

export default function Showcase() {
 const [videoImg, setVideoImg] = useState();

 const fetchData = () => {
  fetch(
   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCQB0oujC1TT2rNIWsO3xCyQ&maxResults=5&order=date&key=AIzaSyAcQF7j8loeJTDucLlq-Wke8H3KctvdReo"
  )
   .then((result) => {
    return result.json();
   })
   .then((data) => {
    let videos = data.items;
    console.log("data fetched");
    setVideoImg(videos[1].snippet.thumbnails.medium.url);
   });
 };

 useEffect(() => {
  fetchData();
  console.log(videoImg);
 }, []);

 return (
  <StyledShowcase>
   <div className="showcase__text">
    <p>
     <strong>Ordre & Chaos</strong> est un site amateur vous permettant
     d'accéder à l'essentiel de l'actualité et des ressources concernant le Jeu
     de Cartes Evolutif Marvel Champions.
    </p>
   </div>
   <div className="showcase__boxes">
    <div className="showcase__box">
     <h2>
      <FaYoutube />
      La dernière vidéo
     </h2>
     <img src={videoImg} />
    </div>
    <div className="showcase__box">
     <h2>
      <FaCalendar />
      Prochainement
     </h2>
    </div>
   </div>
  </StyledShowcase>
 );
}
