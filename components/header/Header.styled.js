import styled from "styled-components";

const StyledHeader = styled.header`
 padding: 0 3rem 0 30rem;
 height: 7rem;
 border-bottom: 1px solid #d3d3d3;
 font-size: 1.8rem;
 display: flex;
 justify-content: space-between;
 align-items: center;

 a {
  display: flex;
  align-items: center;
 }

 nav,
 ul,
 li {
  height: 100%;
 }

 li {
  display: flex;
  align-items: center;
  border-bottom: transparent 3px solid;
  transition: border-bottom 0.2s;
 }

 li:hover {
  border-bottom: red 3px solid;
 }

 svg {
  margin-right: 1rem;
 }
`;

export default StyledHeader;
