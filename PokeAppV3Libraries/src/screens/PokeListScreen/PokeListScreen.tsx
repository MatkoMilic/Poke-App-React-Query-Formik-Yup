import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer, Header} from '../../components';
import {PROFILE_SCREEN, SETTINGS_SCREEN} from '../../constants';
import {IMainNavScreenProps} from '../../types';

interface PokeListScreenProps extends IMainNavScreenProps {}

const PokeListScreen: React.FC<PokeListScreenProps> = ({
  navigation,
  children,
}) => {
  const goToProfile = () => {
    navigation.navigate(PROFILE_SCREEN);
  };
  const goToSettings = () => {
    navigation.navigate(SETTINGS_SCREEN);
  };

  return (
    <ScreenContainer>
      <Header
        goToScreenLeftIcon={goToProfile}
        goToScreenRightIcon={goToSettings}
        headerTitle="Poke Settings"
        leftIcon="home-account"
        rightIcon="account-cog"
        headerSubtitle="2front">
        {children}
      </Header>
      <Text>Welcome to poke list</Text>
    </ScreenContainer>
  );
};

export default PokeListScreen;
