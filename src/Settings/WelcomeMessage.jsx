import React from 'react';
import {AppContext} from './../App/AppProvider';
import styled from 'styled-components';

const WelcomeMessageStyled = styled.div`
  margin-top: 32px;
`;

export default function WelcomeMessage() {
  return (
    <AppContext.Consumer>
        {({firstVisit}) => 
        firstVisit ? <WelcomeMessageStyled><div>Welcome to CryptoDash, please select your favourite coins to begin</div></WelcomeMessageStyled> : null}
    </AppContext.Consumer>
  )
}
