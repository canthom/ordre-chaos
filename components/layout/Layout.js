import Head from "next/head";
import Aside from "../aside/Aside";
import Header from "../header/Header";

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
   <div className="container">{children}</div>
  </>
 );
}

Layout.defaultProps = {
 title: "Ordre & Chaos | Site spécialisé sur les JCE Coopératifs",
 description: "Find the latest DJ and other musical events",
 keywords: "lcg, marvel",
};
