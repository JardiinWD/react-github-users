import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';

function AuthWrapper({ children }) {
  // Destructuring of useAuth
  const { isLoading, error } = useAuth0()

  // Checked if isLoading is True
  if (isLoading) {
    return <Wrapper>
      <img src={loadingGif} alt="Spinner" />
    </Wrapper>

  }
  // Checked if there is an error is True  
  if (error) {
    return <Wrapper>
      <h1>{error.message}</h1>
    </Wrapper>

  }

  return <Fragment>{children}</Fragment>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
