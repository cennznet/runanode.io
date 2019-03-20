import React from 'react';
import { graphql } from 'gatsby';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import { colors } from 'theme';

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

const Download = ({ props }) => {
  if (!props) {
    return <div>There is no data</div>;
  }
  //   const markdown = props.data.allMarkdownRemark.edges;
  //   const json = props.data.allFeaturesJson.edges;
  const github = props.data.github;
  const releaseAssets = github.repository.releases.edges[0].node.releaseAssets.edges;
  const releaseNotes =
    github.repository.releases.edges[0].node.releaseAssets.edges[0].node.release.description || '';

  return (
    <div>
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

export default Download;
