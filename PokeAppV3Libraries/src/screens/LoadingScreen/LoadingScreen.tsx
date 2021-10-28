import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <ScreenContainer>
      <Text>Welcome</Text>
    </ScreenContainer>
  );
};

export default LoadingScreen;
