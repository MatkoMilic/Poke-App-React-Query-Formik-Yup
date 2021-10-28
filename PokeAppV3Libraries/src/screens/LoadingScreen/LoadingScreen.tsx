import React from 'react';
import {Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenContainer} from '../../components/ScreenContainer';
import {
  OnboardingStackParamList,
  RootNavigatorParamsList,
} from '../../constants';

interface LoadingScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<OnboardingStackParamList, 'LoadingScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Welcome to Loading Screen</Text>
    </ScreenContainer>
  );
};

export default LoadingScreen;
