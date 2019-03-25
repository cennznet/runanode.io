import React from 'react';
import theme, { colors } from 'theme';
import styled from 'styled-components';
import Hint from 'components/Hint';
import Clipboard from 'components/Clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, media } from 'styled-bootstrap-grid';

const DownloadCardList = styled.div`
  display: flex;
  margin: 2rem 0;
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
  margin: 0 1rem;

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
  display: block;
  height: 2.5rem;
  width: 8rem;
  text-align: center;
  line-height: 2.5rem;
  background-color: ${colors.primary};
  color: ${colors.N0};
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  border-radius: 3px;

  &:hover {
    background: ${theme.listitemHighlightGradient};
  }
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
  <DownloadCardList>
    {downloadData &&
      downloadData.map(data => {
        const { device, url, checksum, logo, desc } = data;
        return (
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
        );
      })}
  </DownloadCardList>
);

export default DownloadCards;
