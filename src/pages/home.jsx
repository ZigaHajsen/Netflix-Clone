import React, { Fragment } from 'react';

import { JumbotronContainer } from '../containers/JumbotronContainer';
import { FooterContainer } from '../containers/FooterContainer';
import { FaqsContainer } from '../containers/FaqsContainer';

export default function Home() {
  return (
    <Fragment>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
}
