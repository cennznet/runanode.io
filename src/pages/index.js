import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Container } from 'components';
import Download from 'components/Download';
import SEO from 'components/SEO';
import Layout from '../layouts/index';

const Home = props => {
  return (
    <Layout>
      <SEO title="rUN" />
      <Helmet>
        <meta
          name="description"
          content="A highly secure wallet to manage your assets, check your balance, store or transfer tokens.
            You can also stake CENNZ tokens to participant in the network to ensure that it thrives"
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
      repository(owner: "cennznet", name: "runanode") {
        releases(last: 1) {
          edges {
            node {
              name
              publishedAt
              releaseAssets(last: 30) {
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
