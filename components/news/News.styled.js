import styled from "styled-components";

const StyledNews = styled.div`
 display: flex;
 flex-direction: column;
 & > div > div {
  display: flex;
 }

 & > span {
  margin: 3rem auto;
  border-radius: 15%;
  background-color: rgba(0, 0, 0, 0.1);
  height: 2px;
  width: 50%;
 }

 .news__box {
  margin-top: 2rem;
 }

 h3 {
  margin-bottom: 2rem;
 }

 .news__img {
  background-image: url("/images/wolverine.png");
  background-position: 65%;
  background-size: cover;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  margin-right: 5rem;
 }

 .news__text {
  width: calc(100% - 15rem);
  font-size: 1.6rem;

  p {
   margin: 1rem 0;
  }

  p:last-of-type {
   margin-top: 2rem;
   text-align: right;
  }

  ul {
   list-style: inside;
  }
 }
`;

export default StyledNews;
