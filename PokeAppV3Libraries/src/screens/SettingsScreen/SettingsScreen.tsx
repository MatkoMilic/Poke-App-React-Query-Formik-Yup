import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <ScreenContainer>
      <Text>Welcome</Text>
    </ScreenContainer>
  );
};

export default SettingsScreen;
