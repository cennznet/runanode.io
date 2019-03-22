import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link';
import { colors } from 'theme';

// padding attrs in ContentContainer is temporay layout
const HeaderConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  padding: 0 15rem;
`;

const HeaderSection = styled.div`
  display: felx;
  padding: 1rem;
`;

const Header = () => (
  <HeaderConatiner>
    <HeaderSection>rUN Node logo</HeaderSection>
    <HeaderSection>
      <Link>Github</Link>
    </HeaderSection>
  </HeaderConatiner>
);

export default Header;
