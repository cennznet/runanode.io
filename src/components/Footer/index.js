import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'components';

import { colors, media } from 'theme';
import Link from 'components/Link';
import CentralityLogo from '-!svg-react-loader!images/logo.svg';

const FooterContainer = styled.div`
  min-height: 5rem;
  background-color: ${colors.primary};
  display: flex;
  overflow: hidden;
  align-items: center;

  ${media.smDown`
     padding: 0.5rem 0;
  `}
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;

  ${media.smDown`
    text-align: left;
    margin-top: 0.5rem;
    flex-direction: column;
  `}
`;

const LogoText = styled.div`
  margin-right: 0.5rem;
  letter-spacing: 0.7px;
  line-height: 19px;
`;

const CustomLink = styled(Link)`
  & + & {
    margin-left: 1rem;
  }

  ${media.smDown`
    margin: 0.5rem 0;

    & + & {
    margin-left: 0;
  }
`}
`;

const LinkText = styled.span`
  letter-spacing: 0.75px;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <Row>
        <Col xs="12" sm="6">
          <div style={{ display: 'flex' }}>
            <LogoText>Powered by</LogoText>
            <CentralityLogo />
          </div>
        </Col>
        <Col xs="12" sm="6">
          <Links>
            <CustomLink href="https://github.com/cennznet/rUN">
              <LinkText>Github</LinkText>
            </CustomLink>
            <CustomLink href="mailto:support@runanode.io">
              <LinkText>Support</LinkText>
            </CustomLink>
            <CustomLink href="https://centrality.ai/developers-2/">
              <LinkText>Developer portal</LinkText>
            </CustomLink>
          </Links>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
);

export default Footer;
