import React, { useState, useContext } from 'react';

import { FirebaseContext } from '../context/firebase';

import { SelectProfilesContainer } from './SelectProfilesContainer';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return <SelectProfilesContainer user={user} setProfile={setProfile} />;
}
