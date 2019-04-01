import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { media } from 'theme';
import { Container } from 'components';
import Link from 'components/Link';

const HeaderWrapper = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.smDown`
    height: 6rem;
  `}
`;

const HeaderSection = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;

  ${media.smDown`
    padding: 0 1rem;
  `};
`;

const Github = styled.div`
  display: felx;
`;

// TODO: rUN Logo
const Header = () => (
  <Container>
    <HeaderWrapper>
      <HeaderSection />
      <HeaderSection>
        <Github>
          <FontAwesomeIcon icon={faGithub} />
          <Link
            margin="0 0 0 0.5rem"
            href="https://github.com/cennznet/cennz-node-release/releases"
          >
            Github
          </Link>
        </Github>
      </HeaderSection>
    </HeaderWrapper>
  </Container>
);

export default Header;
