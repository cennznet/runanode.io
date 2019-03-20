import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const Test = styled.div.attrs({
  className: '',
})`
  width: 60rem;

  img {
    width: 20rem;
  }
`;

const DownloadContainer = styled.div`
  width: 30rem;
`;

const DownloadLink = styled.a`
  display: block;
`;

const Home = props => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  const github = props.data.github;
  const releaseAssets = github.repository.releases.edges[0].node.releaseAssets.edges;
  const releaseNotes =
    github.repository.releases.edges[0].node.releaseAssets.edges[0].node.release.description || '';

  return (
    <div>
      <SEO title="Home" />
      <Helmet>
        <meta name="description" content="Cennz Node landing page" />
      </Helmet>
      <Test>
        <div dangerouslySetInnerHTML={{ __html: md.render(releaseNotes) }} />
      </Test>
      <DownloadContainer>
        {releaseAssets.map(asset => {
          const { id, name, url, description } = asset.node;
          return (
            <DownloadLink key={id} href={url} target="_blank">
              {name}
            </DownloadLink>
          );
        })}
      </DownloadContainer>
    </div>
  );
};

export const query = graphql`
  query {
    github {
      repository(owner: "cennznet", name: "cennz-node-release") {
        releases(last: 1) {
          edges {
            node {
              name
              releaseAssets(last: 10) {
                edges {
                  node {
                    id
                    name
                    downloadUrl
                    downloadCount
                    url
                    release {
                      id
                      description
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
