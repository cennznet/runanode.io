import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Link from 'components/Link';
import { colors } from 'theme';

const HeaderConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
`;

const HeaderSection = styled.div`
  display: felx;
  padding: 1rem;
`;

const Header = () => (
  <Container>
    <HeaderConatiner>
      <HeaderSection>rUN Node logo</HeaderSection>
      <HeaderSection>
        <Link>Github</Link>
      </HeaderSection>
    </HeaderConatiner>
  </Container>
);

export default Header;
