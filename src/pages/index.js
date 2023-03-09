import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";
import { StaticImage } from "gatsby-plugin-image";
import { frontFoto } from "../components/layout.module.css";
import Seo from "../components/seo.js";

function IndexPage() {
  return (
    <>
      <Layout pageTitle="Thuis" altText="Een foto van mij">
        <StaticImage
          alt="Een foto van ondergetekende"
          src="../images/indexFoto.png"
          className={frontFoto}
        />
        <h2>Even kort, hoor</h2>
        <p>
          Dit is de website van Raynauld Minkema. Een plek om dingen die ik aan
          mensen wil tonen kan plaatsen, maar ook een plek om mijn voortgang in
          projecten bij te houden.
        </p>
      </Layout>
    </>
  );
}

export const Head = () => <Seo title="Raynauld's thuispagina" />;

export default IndexPage;
