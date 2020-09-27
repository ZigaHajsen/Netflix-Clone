import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, Container, ButtonLink, Logo } from './styles/HeaderStyles';

export default function Header({ children, background = true, ...restProps }) {
  return background ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
