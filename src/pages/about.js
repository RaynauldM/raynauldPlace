import * as React from "react";
import Seo from "../components/seo.js";
import Layout from "../components/layout.js";
import { StaticImage } from "gatsby-plugin-image";
import { aboutFoto, spotFrame } from "../components/layout.module.css";

function AboutPage() {
  const pageId = "about";
  return (
    <>
      <iframe
        src="https://open.spotify.com/embed/track/1Pr4ZFk19p1zVaY1012ECL?utm_source=generator"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className={spotFrame}
      ></iframe>
      <Layout pageTitle="Over mij">
        <StaticImage
          alt="Weer een Raynauld, maar dan ietwat verdacht."
          src="../images/aboutFoto1.png"
          className={aboutFoto}
        />
      </Layout>
    </>
  );
}

export const Head = () => <Seo title="about pagina" />;

export default AboutPage;
