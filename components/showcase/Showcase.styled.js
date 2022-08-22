import styled from "styled-components";

const StyledShowcase = styled.div`
 font-size: 2rem;

 p {
  padding: 2rem 0;
 }

 .showcase__boxes {
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
   font-size: 2.5rem;
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
