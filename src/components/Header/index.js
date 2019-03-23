import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Link from 'components/Link';
import { colors } from 'theme';

const HeaderConatiner = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSection = styled.div`
  display: felx;
`;

const Header = () => (
  <Container>
    <HeaderConatiner>
      <Row alignItems="center" justifyContent="between">
        <HeaderSection>rUN Node logo</HeaderSection>
        <HeaderSection>
          <FontAwesomeIcon icon={faAppleAlt} />
          <Link>Github</Link>
        </HeaderSection>
      </Row>
    </HeaderConatiner>
  </Container>
);

export default Header;
