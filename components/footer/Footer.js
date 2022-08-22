import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import StyledFooter from "./Footer.styled";

export default function Footer() {
 return (
  <StyledFooter>
   <div className="footer__top">
    <nav className="footer__nav">
     <ul className="footer__list">
      <li>
       <Link href="/">
        <a>Home</a>
       </Link>
      </li>

      <li>
       <Link href="/resources">
        <a>Ressources</a>
       </Link>
      </li>

      <li>
       <Link href="/contact">
        <a>Me Contacter</a>
       </Link>
      </li>
     </ul>
    </nav>

    <div className="footer__social">
     <div>
      <Link href="https://www.youtube.com/channel/UCQB0oujC1TT2rNIWsO3xCyQ">
       <a>
        <FaYoutube />
       </a>
      </Link>
     </div>
     <div>
      <Link href="https://github.com/canthom/ordre-chaos">
       <a>
        <FaGithub />
       </a>
      </Link>
     </div>
    </div>
   </div>

   <div className="footer__bottom">
    <span>&copy; 2022 - Ordre & Chaos. Tous droits réservés.</span>

    <span>
     Ordre & Chaos est un site amateur et n'est pas soutenu par Fantasy Flight
     Games ou Asmodee.
    </span>
    <span>
     Tous les logos et images présents sur ce site sont la propriété de leurs
     marques respectives.
    </span>
   </div>
  </StyledFooter>
 );
}
