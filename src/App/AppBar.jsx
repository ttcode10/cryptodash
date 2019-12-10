import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './AppProvider';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 100px auto 180px 180px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
`;

function ControlButton({name}) {
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
        >
          {name}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

export default class AppBar extends Component {
  render() {
    return (
      <Bar>
        <Logo>CryptoDash</Logo>
        <div />
        <ControlButton active name="dashboard" />
        <ControlButton name="settings" />
      </Bar>
    )
  }
}
