import Head from "next/head";
import Aside from "../aside/Aside";
import Header from "../header/Header";
import Container from "../container/Container";
import Footer from "../footer/Footer";

export default function Layout({ title, keywords, description, children }) {
 return (
  <>
   <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
   </Head>

   <Aside />
   <Header />
   <Container />
   <Footer />
  </>
 );
}

Layout.defaultProps = {
 title: "Ordre & Chaos | Site spécialisé sur les JCE Coopératifs",
 description: "Les dernières actualités sur le JCE Marvel Champions",
 keywords: "lcg, marvel",
};
