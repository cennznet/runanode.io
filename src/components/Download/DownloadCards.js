import React from 'react';
import theme, { colors } from 'theme';
import styled from 'styled-components';
import Hint from 'components/Hint';
import Clipboard from 'components/Clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, media } from 'styled-bootstrap-grid';

const DownloadCardWrapper = styled.div`
  height: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
  background-color: ${colors.V900};
  min-width: 20rem;
  max-width: 100%;

  &:hover {
    background: ${theme.listitemHighlightGradient};
  }

  ${media.xs`
    // width: 90%;
    margin: 1.6rem 0;
  `}

  ${media.md`
    //  width: 45%;
     margin-bottom: 1.6rem;
  `}

  ${media.lg`
    // width: 30%;
  `}
`;

const DownloadCard = styled.div`
  height: 99%;
  width: 99%;
  border-radius: 1.2rem;
  background-color: ${colors.V900};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);

  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 2.5rem 0 1rem;
`;

const Device = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 1rem 0;
`;

const Version = styled.div`
  padding: 1rem 0;
  font-size: 16px;
`;

const DownloadLink = styled.a`
  color: transparent;
  pointer-events: none;
  cursor: default;

  ${media.lg`
    height: 2.5rem;
    width: 8rem;
    color: ${colors.N0};
    display: block;
    text-align: center;
    line-height: 2.5rem;
    background-color: ${colors.primary};
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    border-radius: 3px;
    cursor: pointer;
    pointer-events: auto;
  
    &:hover {
      background: ${theme.listitemHighlightGradient};
    }
  `}
`;

const CheckSumContainer = styled.div`
  margin: 3rem 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckSumTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
`;

const ClipboardContainer = styled.div`
  width: 80%;
  padding: 0 1rem;
`;

const DownloadCards = ({ downloadData, releaseVersion }) => (
  <Row justifyContent="center" smJustifyContent="center" mdJustifyContent="between">
    {downloadData &&
      downloadData.map(data => {
        const { device, url, checksum, logo, desc } = data;
        return (
          <Col col xs={12} sm={12} md={5} lg={3} key={device}>
            <DownloadCardWrapper key={device}>
              <DownloadCard>
                <LogoContainer>
                  <FontAwesomeIcon icon={logo} size="5x" />
                </LogoContainer>
                <Device>{device}</Device>
                {desc && <div>{desc}</div>}
                {url && releaseVersion && <Version>Ver. {releaseVersion}</Version>}
                {url && (
                  <DownloadLink href={url} target="_blank">
                    Download
                  </DownloadLink>
                )}
                {checksum && (
                  <CheckSumContainer>
                    <CheckSumTitle>
                      Sha256 CheckSum
                      <Hint tooltip={{ place: 'bottom', styles: { minWidth: '15rem' } }}>
                        <p>Sha256 checksum</p>
                      </Hint>
                    </CheckSumTitle>
                    <ClipboardContainer>
                      <Clipboard>{checksum}</Clipboard>
                    </ClipboardContainer>
                  </CheckSumContainer>
                )}
              </DownloadCard>
            </DownloadCardWrapper>
          </Col>
        );
      })}
  </Row>
);

export default DownloadCards;
