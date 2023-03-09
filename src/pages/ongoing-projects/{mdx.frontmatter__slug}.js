import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

function BlogPost({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.published}</p>
      {children}
    </Layout>
  );
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        published
      }
    }
  }
`;

export default BlogPost;
