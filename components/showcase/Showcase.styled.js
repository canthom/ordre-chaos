import styled from "styled-components";

const StyledShowcase = styled.div`
 font-size: 2rem;
 display: flex;
 flex-direction: column;

 & > span {
  margin: 5rem auto;
  border-radius: 15%;
  background-color: rgba(0, 0, 0, 0.1);
  height: 2px;
  width: 90%;
 }

 p {
  padding: 2rem 0;
 }

 .showcase__boxes {
  margin-top: 3rem;

  display: flex;
  gap: 3rem;
 }
 .showcase__box {
  padding: 3rem;
  border: 1rem solid #f27059;
  flex: 1;
  display: flex;
  flex-direction: column;

  &:last-of-type {
   border: 1rem solid #f5f3f4;
  }

  h2 {
   svg {
    font-size: 3rem;
    margin-right: 1rem;
   }

   margin-bottom: 1.5rem;
   display: flex;
   align-items: center;
  }

  img {
   width: 100%;
  }
 }
`;

export default StyledShowcase;
