import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

const Link = styled.a.attrs({
  target: '_blank',
})`
  display: ${p => (p.inline ? 'inline' : 'block')};
  cursor: pointer;
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};
  color: ${colors.N0};
  margin: ${p => p.margin || '0'};

  &:hover {
    color: ${colors.textHover};
  }
`;

export default Link;
