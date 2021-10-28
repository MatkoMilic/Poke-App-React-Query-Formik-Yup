import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';

interface PokeListScreenProps {}

const PokeListScreen: React.FC<PokeListScreenProps> = () => {
  return (
    <ScreenContainer>
      <Text>Welcome</Text>
    </ScreenContainer>
  );
};

export default PokeListScreen;
