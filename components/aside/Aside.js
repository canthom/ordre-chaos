import { FaEnvelope, FaGlobe, FaFolder } from "react-icons/fa";
import Link from "next/link";
import StyledAside from "./Aside.styled";

export default function Aside() {
 return (
  <StyledAside>
   <div className="aside__logo">Ordre & Chaos</div>

   <nav className="aside__nav">
    <ul className="aside__list">
     <li className="aside__item aside__item--active">
      <a>
       <FaGlobe />
       Accueil
      </a>
     </li>

     <li className="aside__item">
      <a>
       <FaFolder />
       Ressources
      </a>
     </li>
    </ul>
    <span className="aside__bottom"></span>
   </nav>
   <div className="aside__info">
    <div>
     <Link href="/contact">
      <a>
       <FaEnvelope />
       Me Contacter
      </a>
     </Link>
    </div>
    <div></div>
   </div>
  </StyledAside>
 );
}
