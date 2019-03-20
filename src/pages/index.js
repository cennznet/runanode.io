import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import SEO from 'components/SEO';
import theme from 'theme';
import Header from 'pages/Header';
import Footer from 'pages/Footer';
import Download from 'pages/Download';

const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LandingPageContent = styled.div`
  background: ${theme.pageGradient};
  height: 100%;
  width: 100vw;
`;

const Home = props => {
  return (
    <LandingPageContainer>
      <LandingPageContent>
        <SEO title="Home" />
        <Helmet>
          <meta name="description" content="Cennz Node landing page" />
        </Helmet>
        <Header />
        <Download props={props} />
      </LandingPageContent>
      <Footer />
    </LandingPageContainer>
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
