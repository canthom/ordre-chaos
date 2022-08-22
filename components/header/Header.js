import Link from "next/link";
import { FaEnvelope, FaYoutube } from "react-icons/fa";
import StyledHeader from "./Header.styled";

export default function Header() {
 return (
  <StyledHeader>
   <nav className="header__social">
    <ul>
     <li>
      <Link href="https://www.youtube.com/channel/UCQB0oujC1TT2rNIWsO3xCyQ">
       <a>
        <FaYoutube />
        YouTube
       </a>
      </Link>
     </li>
    </ul>
   </nav>

   <nav className="header__info">
    <ul>
     <li>
      <Link href="/contact">
       <a>
        <FaEnvelope />
        Me Contacter
       </a>
      </Link>
     </li>
    </ul>
   </nav>
  </StyledHeader>
 );
}
