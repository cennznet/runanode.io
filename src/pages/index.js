import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import SEO from 'components/SEO';
import theme, { colors } from 'theme';
import Layout from '../layouts/index';
import Download from 'components/Download';
import Footer from 'components/Footer';
import Header from 'components/Header';

// const HomePage = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   color: ${colors.N0};
// `;

// // padding attrs in ContentContainer is temporay layout
// const Content = styled.div`
//   background: ${theme.pageGradient};
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24);
//   height: 92vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
// `;

const Home = props => {
  return (
    <Layout>
      <SEO title="rUN" />
      <Helmet>
        <meta
          name="description"
          content="A highly secure wallet to manage your assets, check your balance, store or transfer tokens. You can also stake CENNZ tokens to participant in the network to ensure that it thrives"
        />
      </Helmet>
      <Container>
        <Download data={props && props.data} />
      </Container>
    </Layout>
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
              publishedAt
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
