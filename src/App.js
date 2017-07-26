import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppEntry from './components/AppEntry';

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
            <AppEntry />
        </MuiThemeProvider>
    );
  }
}

export default App;
