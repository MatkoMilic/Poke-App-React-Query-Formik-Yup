import React from 'react';
import {RootNavigator} from './navigators';
import {PreferencesProvider} from './components';

const App: React.FC = () => {
  return (
    <PreferencesProvider>
      <RootNavigator />
    </PreferencesProvider>
  );
};

export default App;
