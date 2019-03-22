import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';
import Link from 'components/Link';
import CentralityLogo from '-!svg-react-loader!images/logo.svg';

// padding attrs in FooterContainer is temporary layout
const FooterContainer = styled.div`
  height: 8vh;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15rem;
`;

const FooterSection = styled.div`
  display: felx;
  padding: 1rem;
`;

const LogoText = styled.div`
  font-size: 14px;
  margin-right: 0.5rem;
  letter-spacing: 0.7px;
  line-height: 19px;
`;

const LinkText = styled.div`
  font-size: 15px;
  letter-spacing: 0.75px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <LogoText>Powered by</LogoText>
      <CentralityLogo />
    </FooterSection>
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
  </FooterContainer>
);

export default Footer;
