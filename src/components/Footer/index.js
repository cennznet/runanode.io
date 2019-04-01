import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import { colors } from 'theme';
import Link from 'components/Link';
import CentralityLogo from '-!svg-react-loader!images/logo.svg';

const FooterContainer = styled.div`
  min-height: 5rem;
  background-color: ${colors.primary};
  display: flex;
  overflow: hidden;
  align-items: center;

  ${media.xs`
     padding: 0.5rem 0;
  `}
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: ${p => (p.left ? 'flex-start' : 'flex-end')};

  ${media.xs`
    margin-top: 0.5rem;
    justify-content: flex-start;
  `}
`;

const LogoText = styled.div`
  margin-right: 0.5rem;
  letter-spacing: 0.7px;
  line-height: 19px;
`;

const CustomLink = styled(Link)`
  ${media.xs`
    margin: 0.5rem 0;
`}
`;

const LinkText = styled.div`
  letter-spacing: 0.75px;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <Row smJustifyContent="between">
        <Col col xs="12" sm="4">
          <FooterSection left>
            <LogoText>Powered by</LogoText>
            <CentralityLogo />
          </FooterSection>
        </Col>
        <Col col xs="12" sm="6">
          <FooterSection>
            <Row mdJustifyContent="end">
              <Col col xs="12" md="2">
                <CustomLink href="https://github.com/cennznet/rUN">
                  <LinkText>Github</LinkText>
                </CustomLink>
              </Col>
              <Col col xs="12" md="2">
                <CustomLink href="mailto:support@runanode.io">
                  <LinkText>Support</LinkText>
                </CustomLink>
              </Col>
              <Col col xs="12" md="4">
                <CustomLink href="https://centrality.ai/developers-2/">
                  <LinkText>Developer portal</LinkText>
                </CustomLink>
              </Col>
            </Row>
          </FooterSection>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
);

export default Footer;
