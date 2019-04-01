import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/free-brands-svg-icons/faGithub';
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
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
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: ${p => (p.left ? 'flex-start' : 'flex-end')};

  ${media.xs`
    padding: 0 1rem;
  `};
`;

const Github = styled.div`
  display: felx;
`;

// TODO: rUN Logo
const Header = () => (
  <HeaderConatiner>
    <Container>
      <Row smJustifyContent="between">
        <Col col sm="2" left>
          <HeaderSection />
        </Col>
        <Col col sm="2">
          <HeaderSection>
            <Github>
              <FontAwesomeIcon icon={faGithub} />
              <Link href="https://github.com/cennznet/cennz-node-release/releases">Github</Link>
            </Github>
          </HeaderSection>
        </Col>
      </Row>
    </Container>
  </HeaderConatiner>
);

export default Header;
