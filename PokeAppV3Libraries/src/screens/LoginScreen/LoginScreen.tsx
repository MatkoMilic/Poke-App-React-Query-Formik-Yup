import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <ScreenContainer>
      <Text>Welcome</Text>
    </ScreenContainer>
  );
};

export default LoginScreen;
