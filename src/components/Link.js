import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

const Link = styled.a.attrs({
  target: '_blank',
})`
  display: block;
  cursor: pointer;
  text-decoration: none;
  margin: ${p => p.margin || '0 1rem'};

  &:hover {
    color: ${colors.textHover};
  }
`;

export default Link;
