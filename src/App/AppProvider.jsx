import React from 'react'

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.saveSettings(),
      setPage: this.setPage,
      confirmFavourites: this.confirmFavourites
    }
  }

  confirmFavourites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('favouriteCrypto', JSON.stringify({
      test: 'Hello'
    }));
  }

  saveSettings() {
    const favouriteCrypto = JSON.parse(localStorage.getItem('favouriteCrypto'));
    if (!favouriteCrypto) {
      return {page: 'settings', firstVisit: true}
    } else {
      return {};
    }
  }

  setPage = page => this.setState({page})

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

}
