import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({ title }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {data.site.siteMetadata.title} | {title}
    </title>
  );
}
