import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { SelectProfilesContainer } from '../../containers/SelectProfilesContainer';

jest.mock('react-router-dom');

describe('<Profiles />', () => {
  it('renders the <Profiles />', () => {
    const user = { displayName: 'Žiga', photoURL: 'profile.png' };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <SelectProfilesContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId('user-profile'));
    expect(setProfile).toHaveBeenCalled();
  });
});
