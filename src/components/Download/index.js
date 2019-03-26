import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import theme, { colors } from 'theme';
import LinesBg from '-!svg-react-loader!images/linesBg.svg';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { Row, Col, media } from 'styled-bootstrap-grid';
import { CENNZ_NODE_RELEASE_LINK } from 'constants';
import Link from 'components/Link';

import DownloadCards from './DownloadCards';

const md = new MarkdownIt();

const TitleContainer = styled.div``;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 43px;
  text-align: center;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: center;
`;

const VersionInfo = styled.div`
  height: 1.8rem;
  width: 24rem;
  background: ${theme.listitemHighlightGradient};
  line-height: 1.8rem;
  padding: 0 0.5rem;
  border-radius: 11rem;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  ${media.xs`
    height: 4rem;
    width: 16rem;
    flex-direction: column;
  `}
`;

const DesktopOnly = styled.div`
  padding: 1rem;
  font-size: 16px;
  font-weight: 600;
  text-align: center;

  ${media.md`
    color: ${colors.N0};
  `}

  ${media.lg`
    color: transparent;
  `}
`;

const VersionText = styled.div``;

const Http = new XMLHttpRequest();

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
          macDownloadLink = url;
        }

        if (name.endsWith('mac.pkg.sha256') && url) {
          Http.open('GET', url);
          Http.send();
          Http.onreadystatechange = e => {
            console.log(Http.responseText);
            const response = Http.responseText;
            appleCheckSum = response && response.substring(response.indexOf('=') + 1);
          };
        }

        if (name.endsWith('linux-amd64.deb') && url) {
          linuxDownloadLink = url;
        }

        if (name.endsWith('linux-amd64.deb.sha256') && url) {
          Http.open('GET', url);
          Http.send();
          Http.onreadystatechange = e => {
            const response = Http.responseText;
            linuxCheckSum = response && response.substring(response.indexOf('=') + 1);
          };
        }
      });
    }

    const tempAppleChecksum =
      appleCheckSum || '4659e0278e6f1c9fa0740e02b73ee739da1c5cb2dfbe0aca6def1a32cd3cf334';
    const tempLinuxChecksum =
      linuxCheckSum || '92d2446ce6e38b2753b805001a2ee343e2326e68673e7010b0f13a1eae250682';

    const resortedDownloadData = [
      { device: 'macOS 64 bit', url: macDownloadLink, checksum: tempAppleChecksum, logo: faApple },
      {
        device: 'Linux 64 bit',
        url: linuxDownloadLink,
        checksum: tempLinuxChecksum,
        logo: faLinux,
      },
      { device: 'Windows', desc: 'Coming soon', logo: faWindows },
    ];

    setDownloadData(resortedDownloadData);
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col col xs={10} md={6} mdOffset={3}>
          <Title>LET&#39;S RUN A NODE!</Title>
          <Description>
            Download node application to your computer from below list. If you prefer to use CLI,
            please download{' '}
            <Link href={CENNZ_NODE_RELEASE_LINK} inline margin="0" underline>
              here
            </Link>
            .
          </Description>
          <VersionInfo>
            <VersionText>{`Current version ${releaseVersion}`}</VersionText>
            <VersionText>{`Release date: ${latestReleaseDate}`}</VersionText>
          </VersionInfo>
          <DesktopOnly>rUN Node is for desktop only</DesktopOnly>
        </Col>
      </Row>
      <DownloadCards downloadData={downloadData} releaseVersion={releaseVersion} />
    </React.Fragment>
  );
};

export default Download;
