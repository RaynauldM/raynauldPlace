import * as React from "react";
import Layout from "../components/layout.js";
import { StaticImage } from "gatsby-plugin-image";
import { frontFoto } from "../components/layout.module.css";
import Seo from "../components/seo.js";

function IndexPage() {
  return (
    <>
      <Layout pageTitle="Home">
        <StaticImage
          alt="A photo of yours truly"
          src="../images/indexFoto.png"
          className={frontFoto}
        />
        <h2>I'll be brief</h2>
        <p>
          This is the webspace of Raynauld Minkema. A place for me to store
          stuff I would like to show to other people, but also for me to keep
          track of my projects.
        </p>
      </Layout>
    </>
  );
}

export const Head = () => <Seo title="Raynauld's homespace" />;

export default IndexPage;
