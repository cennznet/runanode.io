import React from 'react';
// import { graphql, withPrefix, Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from 'theme';

const FooterContainer = styled.div`
  background-color: ${colors.primary};
  height: 8%;
`;

const Footer = () => <FooterContainer>Footer</FooterContainer>;

export default Footer;
