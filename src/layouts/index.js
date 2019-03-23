import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'scss/style.scss';

const Main = styled.div`
  min-height: calc(100vh - 80px);
`;

const Layout = props => {
  return (
    <React.Fragment>
      <Main>
        <Header />
        {props.children}
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
