import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

const Link = styled.a.attrs({
  target: '_blank',
})`
  width: 100%;
  display: ${p => (p.inline ? 'inline' : 'block')};
  cursor: pointer;
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};
  color: ${colors.N0};
  margin: ${p => p.margin || '0 1rem'};

  &:hover {
    color: ${colors.textHover};
  }
`;

export default Link;
