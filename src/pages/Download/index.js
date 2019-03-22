import React from 'react';
import { graphql } from 'gatsby';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import theme, { colors } from 'theme';
import LinesBg from '-!svg-react-loader!images/linesBg.svg';

const md = new MarkdownIt();

const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 43px;
`;

const Description = styled.div`
  width: 30%;
  font-size: 16px;
  line-height: 24px;
  margin: 1rem;
`;

const VersionInfo = styled.div`
  font-size: 14px;
  height: 1.8rem;
  min-width: 22.5rem;
  background: ${theme.listitemHighlightGradient};
  line-height: 1.8rem;
  padding: 0 0.5rem;
  border-radius: 11rem;
`;

const Test = styled.div.attrs({
  className: '',
})`
  width: 60rem;

  img {
    width: 20rem;
  }
`;

const DownloadLink = styled.a`
  display: block;
`;

const Download = ({ data: { github } }) => {
  if (!github) {
    return <div>There is no data</div>;
  }
  //   const markdown = props.data.allMarkdownRemark.edges;
  //   const json = props.data.allFeaturesJson.edges;
  console.log(github);
  const { name: releaseVersion, publishedAt } = github.repository.releases.edges[0].node;
  const latestReleaseDate = publishedAt && new Date(publishedAt).toDateString();
  const releaseAssets = github.repository.releases.edges[0].node.releaseAssets.edges;
  const releaseNotes =
    github.repository.releases.edges[0].node.releaseAssets.edges[0].node.release.description || '';

  return (
    <DownloadContainer>
      <TitleContainer>
        <Title>LET'S RUN A NODE!</Title>
        <Description>
          Download node application to your computer from below list. If you prefer to use CLI,
          please download here.
        </Description>
        <VersionInfo>{`Current version ${releaseVersion} Release date: ${latestReleaseDate}`}</VersionInfo>
      </TitleContainer>
      <div>
        <LinesBg />
      </div>
    </DownloadContainer>
  );
};

export default Download;

{
  /* <div>
{releaseAssets.map(asset => {
  const { id, name, url, description } = asset.node;
  return (
    <DownloadLink key={id} href={url} target="_blank">
      {name}
    </DownloadLink>
  );
})}
</div> */
}
