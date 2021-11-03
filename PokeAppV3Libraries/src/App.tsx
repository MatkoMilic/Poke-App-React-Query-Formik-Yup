import React from 'react';
import {RootNavigator} from './navigators';
import {ThemeProvider} from './components';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
