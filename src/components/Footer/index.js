import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { colors } from 'theme';
import Link from 'components/Link';
import CentralityLogo from '-!svg-react-loader!images/logo.svg';

const FooterContainer = styled.div`
  min-height: 5rem;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
`;

const FooterSection = styled.div`
  display: flex;
`;

const LogoText = styled.div`
  margin-right: 0.5rem;
  letter-spacing: 0.7px;
  line-height: 19px;
`;

const LinkText = styled.div`
  letter-spacing: 0.75px;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <Row smJustifyContent="between">
        <Col col xs="12" sm="4">
          <FooterSection>
            <LogoText>Powered by</LogoText>
            <CentralityLogo />
          </FooterSection>
        </Col>
        <Col col xs="12" sm="6">
          <FooterSection>
            <Link>
              <LinkText>Github</LinkText>
            </Link>
            <Link>
              <LinkText>Support</LinkText>
            </Link>
            <Link>
              <LinkText>Developer portal</LinkText>
            </Link>
          </FooterSection>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
);

export default Footer;
