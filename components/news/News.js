import StyledNews from "./News.styled";

export default function News() {
 return (
  <StyledNews>
   <h2>Les dernières actualités</h2>
   <div className="news__box">
    <h3>Le Pack Wolverine annoncé !</h3>
    <div>
     <div className="news__img"></div>
     <div className="news__text">
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum
       urna risus, rhoncus egestas libero consequat eu. Vivamus dolor neque,
       congue in nisl nec, faucibus placerat risus.
      </p>
      <ul>
       <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        hendrerit.
       </li>
       <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        hendrerit.
       </li>
       <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        hendrerit.
       </li>
       <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        hendrerit.
       </li>
      </ul>
      <p>Source: Fantasy Flight Games</p>
     </div>
    </div>
   </div>
   <span />
  </StyledNews>
 );
}
