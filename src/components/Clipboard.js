import React, { useRef, useState } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Tooltip from 'components/Tooltip';
import { colors } from 'theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.textarea`
  padding: 1rem 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  outline: none;
  box-shadow: 0;
  resize: none;
  font-size: 14px;
  line-height: 1.2rem;
  font-size: 16px;
  min-height: 4rem;
  width: 100%;
  text-align: center;
  color: ${colors.textMuted};
`;

const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  heigth: 2rem;
  border-radius: 50%;
  border: 1px solid ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-top: 2px;
`;

const Clipboard = ({ icon, children }) => {
  const id = uuid();
  const [message, setMessage] = useState('Copy address');
  const textRef = useRef(null);

  function copyToClipboard(e) {
    textRef.current.select();
    document.execCommand('copy');
    setMessage('Copied!');
  }

  return (
    <Wrapper>
      <Text ref={textRef} value={children} onChange={() => {}} />
      <IconWrapper>
        <Icon
          {...icon}
          onClick={copyToClipboard}
          onMouseEnter={() => setMessage('Copy address')}
          data-for={id}
          data-tip
        />
      </IconWrapper>
      <Tooltip id={id}>{message}</Tooltip>
    </Wrapper>
  );
};

Clipboard.defaultProps = {
  icon: {
    color: colors.N0,
    icon: faCopy,
    size: 'sm',
  },
};

export default Clipboard;
