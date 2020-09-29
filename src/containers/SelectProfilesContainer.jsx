import React, { Fragment } from 'react';

import * as ROUTES from '../constants/routes';

import { Header, Profiles } from '../components';

import logo from '../logo.svg';

export function SelectProfilesContainer({ user, setProfile }) {
  return (
    <Fragment>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </Fragment>
  );
}
