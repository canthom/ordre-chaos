import { useRouter } from "next/router";
import StyledContainer from "./Container.styled";
import Showcase from "../showcase/Showcase";
import News from "../news/News";

export default function Container() {
 const router = useRouter();

 return (
  <StyledContainer>
   <header>
    <h1>Bienvenue</h1>
    {router.pathname === "/" && <Showcase />}
    {router.pathname === "/" && <News />}
   </header>
  </StyledContainer>
 );
}
