import React from 'react';
import {RootNavigator} from './navigators';
import {
  NavigationProvider,
  ReactQueryClientProvider,
  ThemeProvider,
} from './components';
import {UserDetailsProvider} from './components';

const App: React.FC = () => {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider>
        <UserDetailsProvider>
          <NavigationProvider>
            <RootNavigator />
          </NavigationProvider>
        </UserDetailsProvider>
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
};

export default App;
