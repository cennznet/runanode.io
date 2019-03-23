import React, { useState, useEffect } from 'react';
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
  min-width: 20rem;
  background: ${theme.listitemHighlightGradient};
  line-height: 1.8rem;
  padding: 0 0.5rem;
  border-radius: 11rem;
  text-align: center;
`;

const DownloadCards = styled.div`
  display: flex;
  padding: 0 10rem;
  margin-top: 4rem;
  justify-content: space-around;
`;

const DownloadCardWrapper = styled.div`
  height: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23rem;
  border-radius: 1.2rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
  background-color: ${colors.V900};

  &:hover {
    background: ${theme.listitemHighlightGradient};
  }
`;

const DownloadCard = styled.div`
  height: 99%;
  width: 99%;
  border-radius: 1.2rem;
  background-color: ${colors.V900};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
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

  const [appleCheckSum, setAppleCheckSum] = useState(null);
  const [macDownloadLink, setMacDownloadLink] = useState(null);

  useEffect(() => {
    if (releaseAssets) {
      releaseAssets.forEach(releaseItem => {
        const { name } = (releaseItem && releaseItem.node) || '';
        const { url } = (releaseItem && releaseItem.node) || null;
        const { downloadUrl } = (releaseItem && releaseItem.node) || null;

        if (name.includes('mac.pkg') && url) {
          setMacDownloadLink(url);
        }

        if (name.includes('mac.dmg.sha256') && url) {
          fetch(url).then(response => console.log('mac.dmg.sha256', response));
        }
      });
    }
  });

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
      <DownloadCards>
        <DownloadCardWrapper>
          <DownloadCard>Test</DownloadCard>
          {macDownloadLink && <a href={macDownloadLink}> for Mac</a>}
        </DownloadCardWrapper>
      </DownloadCards>
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
