import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import theme, { colors } from 'theme';
import LinesBg from '-!svg-react-loader!images/linesBg.svg';
import LinuxLogo from '-!svg-react-loader!images/linux.svg';
import AppleLogo from '-!svg-react-loader!images/apple.svg';
import WindowsLogo from '-!svg-react-loader!images/windows.svg';

import DownloadCards from './DownloadCards';

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

const Download = ({ data: { github } }) => {
  if (!github) {
    return <div>There is no data</div>;
  }
  //   const markdown = props.data.allMarkdownRemark.edges;
  //   const json = props.data.allFeaturesJson.edges;

  const { name: releaseVersion, publishedAt } = github.repository.releases.edges[0].node;
  const latestReleaseDate = publishedAt && new Date(publishedAt).toDateString();
  const releaseAssets = github.repository.releases.edges[0].node.releaseAssets.edges;
  const releaseNotes =
    github.repository.releases.edges[0].node.releaseAssets.edges[0].node.release.description || '';

  const [downloadData, setDownloadData] = useState(null);

  useEffect(() => {
    var macDownloadLink = null;
    var appleCheckSum = null;
    var linuxDownloadLink = null;
    var linuxCheckSum = null;

    if (releaseAssets) {
      releaseAssets.forEach(releaseItem => {
        const { name } = (releaseItem && releaseItem.node) || '';
        const { url } = (releaseItem && releaseItem.node) || null;
        const { downloadUrl } = (releaseItem && releaseItem.node) || null;

        if (name.endsWith('mac.pkg') && url) {
          console.log('mac.pkg -url', url);
          macDownloadLink = url;
        }

        if (name.endsWith('mac.pkg.sha256') && url) {
          console.log('mac.pkg.sha256', url);
          fetch(url).then(response => console.log(response));
        }

        if (name.endsWith('linux-amd64.deb') && url) {
          console.log('linux-amd64.deb', url);
          linuxDownloadLink = url;
        }

        if (name.endsWith('linux-amd64.deb.sha256') && url) {
          console.log('linux-amd64.deb.sha256', url);
          fetch(url).then(response => console.log(response));
        }
      });
    }

    const tempChecksum = 'a8aa2b83ba5a0e6ad09e95905e439c659c18f8d351c57dc4d94fd63ea2e12cb4';

    const resortedDownloadData = [
      { device: 'macOS 64 bit', url: macDownloadLink, checksum: tempChecksum, LogoCmp: AppleLogo },
      {
        device: 'Linux 64 bit',
        url: linuxDownloadLink,
        checksum: tempChecksum,
        LogoCmp: LinuxLogo,
      },
      { device: 'Windows', desc: 'Coming soon', LogoCmp: WindowsLogo },
    ];

    setDownloadData(resortedDownloadData);
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
      <DownloadCards downloadData={downloadData} releaseVersion={releaseVersion} />
    </DownloadContainer>
  );
};

export default Download;
