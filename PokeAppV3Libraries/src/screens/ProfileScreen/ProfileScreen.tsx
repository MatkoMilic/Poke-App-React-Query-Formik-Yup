import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <ScreenContainer>
      <Text>Welcome</Text>
    </ScreenContainer>
  );
};

export default ProfileScreen;
