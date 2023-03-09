import * as React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";

function BlogPage({ data }) {
  return (
    <Layout pageTitle="Mijn projecten">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/ongoing-projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.published}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { id: ASC }) {
      nodes {
        frontmatter {
          published
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="ongoing-projects" />;

export default BlogPage;
