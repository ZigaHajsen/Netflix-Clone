import React, { Fragment } from 'react';

import { JumbotronContainer } from './containers/JumbotronContainer';
import { FooterContainer } from './containers/FooterContainer';
import { FaqsContainer } from './containers/FaqsContainer';

const App = () => {
  return (
    <Fragment>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default App;
