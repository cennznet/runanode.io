import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import SEO from 'components/SEO';
import theme, { colors } from 'theme';
import Header from 'pages/Header';
import Footer from 'pages/Footer';
import Download from 'pages/Download';

const HomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${colors.N0};
`;

// padding attrs in ContentContainer is temporay layout
const Content = styled.div`
  padding: 0 15rem;
  background: ${theme.pageGradient};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24);
  height: 90vh;
  width: 100vw;
`;

const Home = props => {
  return (
    <HomePage>
      <Content>
        <SEO title="Home" />
        <Helmet>
          <meta name="description" content="Cennz Node landing page" />
        </Helmet>
        <Header />
        <Download props={props} />
      </Content>
      <Footer />
    </HomePage>
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
  }
`;

export default Home;