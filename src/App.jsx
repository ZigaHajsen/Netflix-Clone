import React, { Fragment } from 'react';

import { JumbotronContainer } from './containers/JumbotronContainer';
import { FooterContainer } from './containers/FooterContainer';

const App = () => {
  return (
    <Fragment>
      <JumbotronContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default App;
