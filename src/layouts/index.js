import React from 'react';
import SEO from '../components/SEO';
import '../scss/style.scss';

const Layout = props => {
  return (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          {props.children}
        </div>
        <Footer />
        <SubFooter />
      </div>
    </React.Fragment>
  );
};

export default Layout;
