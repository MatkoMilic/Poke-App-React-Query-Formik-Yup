import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer, Header, MyProfileCard} from '../../components';
import {POKELIST_SCREEN, SETTINGS_SCREEN} from '../../constants';
import {IMainNavScreenProps} from '../../types';

interface ProfileScreenProps extends IMainNavScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const goToSettings = () => {
    navigation.navigate(SETTINGS_SCREEN);
  };
  const goToPokeList = () => {
    navigation.navigate(POKELIST_SCREEN);
  };

  return (
    <ScreenContainer>
      <Header
        goToScreenLeftIcon={goToSettings}
        goToScreenRightIcon={goToPokeList}
        headerTitle="Poke Profile"
        leftIcon="account-cog"
        rightIcon="clipboard-list"
        headerSubtitle="2front"
      />
      <Text>Welcome to your profile</Text>
      <MyProfileCard />
    </ScreenContainer>
  );
};

export default ProfileScreen;
