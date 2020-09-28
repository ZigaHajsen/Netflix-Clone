import React, { Fragment, useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import { FirebaseContext } from '../context/firebase';

import { HeaderContainer } from '../containers/HeaderContainer';
import { FooterContainer } from '../containers/FooterContainer';
import { Form } from '../components';

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              type='email'
              placeholder='Email adress'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?{' '}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </Fragment>
  );
}
