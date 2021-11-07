import React from 'react';
import {RootNavigator} from './navigators';
import {
  NavigationProvider,
  ReactQueryClientProvider,
  ThemeProvider,
} from './components';

const App: React.FC = () => {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider>
        <NavigationProvider>
          <RootNavigator />
        </NavigationProvider>
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
};

export default App;
