import React from 'react';
import styled from 'styled-components';
import AppThemeProvider from 'components/AppThemeProvider';
import Header from 'components/Header';
import Footer from 'components/Footer';
import theme from 'theme';
import globalStyles from 'src/globalStyles';

import 'scss/style.scss';

const Main = styled.div`
  min-height: calc(100vh - 80px);
`;

const Layout = props => {
  return (
    <AppThemeProvider {...{ theme, globalStyles }}>
      <React.Fragment>
        <Main>
          <Header />
          {props.children}
        </Main>
        <Footer />
      </React.Fragment>
    </AppThemeProvider>
  );
};

export default Layout;
