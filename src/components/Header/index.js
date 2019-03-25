import React from 'react';
import styled from 'styled-components';
import SVGInline from 'react-svg-inline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, media } from 'styled-bootstrap-grid';
import Link from 'components/Link';

const HeaderConatiner = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.xs`
    height: 6rem;
  `}
`;

const HeaderSection = styled.div`
  display: felx;
  font-size: 16px;
  font-weight: 600;

  ${media.xs`
    padding: 0 1rem; 
  `}
`;

// TODO: rUN Logo
const Header = () => (
  <Container>
    <HeaderConatiner>
      <HeaderSection />
      <HeaderSection>
        <FontAwesomeIcon icon={faGithub} />
        <Link>Github</Link>
      </HeaderSection>
    </HeaderConatiner>
  </Container>
);

export default Header;
