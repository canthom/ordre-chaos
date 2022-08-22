import styled from "styled-components";

const StyledFooter = styled.footer`
 height: 20rem;
 background-color: #eee4e1;
 font-size: 1.5rem;

 .footer__top,
 .footer__bottom {
  padding: 3rem 70rem 3rem 30rem;
 }

 .footer__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
 }

 .footer__list {
  display: flex;

  li:not(:last-of-type) {
   margin-right: 3rem;
  }

  a:hover {
   border-bottom: 2px solid black;
  }
 }

 .footer__social {
  display: flex;
  justify-content: center;
  align-items: center;

  div:not(:last-of-type) {
   margin-right: 1rem;
  }
 }

 svg {
  font-size: 2rem;
 }

 svg:hover {
  color: rgba(0, 0, 0, 0.5);
 }

 .footer__bottom {
  height: calc(100% - 7rem);
  font-size: 1.4rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  span:not(:last-of-type) {
   margin-bottom: 1rem;
  }
 }
`;

export default StyledFooter;
