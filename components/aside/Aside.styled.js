import styled from "styled-components";

const StyledAside = styled.aside`
 background: #e63946;
 position: fixed;
 top: 0;
 bottom: 0;
 left: 0;
 width: 25rem;
 padding: 10rem 0;
 color: white;

 .aside__logo {
  height: 20rem;
  font-size: 6rem;
  text-align: center;
 }

 .aside__list {
  padding-bottom: 3rem;
  font-size: 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

 .aside__bottom {
  height: 2px;
  background: #f27059;
  width: 90%;
  align-self: center;
  border-radius: 15%;
 }

 .aside__nav {
  display: flex;
  flex-direction: column;
 }

 .aside__item {
  width: 100%;
  text-align: center;
  padding: 1rem 0;

  a {
   display: flex;
   justify-content: center;
   align-items: center;
  }
 }

 .aside__item--active {
  background: rgba(0, 0, 0, 0.15);
 }

 .aside__info {
  padding-top: 2rem;
  font-size: 2.5rem;
  text-align: center;

  a {
   display: flex;
   align-items: center;
   justify-content: center;
  }
 }

 svg {
  margin-right: 1rem;
  font-size: 2.15rem;
 }
`;

export default StyledAside;
