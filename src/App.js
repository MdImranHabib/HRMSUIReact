import React, { Component } from 'react';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import DFlats from './components/Flat/DFlats';
import { Container } from '@material-ui/core';
import { ToastProvider } from "react-toast-notifications"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastProvider autoDismiss={true}>
          <Container maxWidth="lg">
            <DFlats />
          </Container>
        </ToastProvider>
      </Provider>
    );
  }
}

export default App;
