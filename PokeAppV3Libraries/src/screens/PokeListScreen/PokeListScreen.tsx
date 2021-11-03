import React from 'react';
import {Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import {ScreenContainer, Header} from '../../components';
import {PROFILE_SCREEN, SETTINGS_SCREEN} from '../../constants';
import {IMainNavScreenProps} from '../../types';

interface PokeListScreenProps extends IMainNavScreenProps {}

const PokeListScreen: React.FC<PokeListScreenProps> = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate(PROFILE_SCREEN);
  };
  const goToSettings = () => {
    navigation.navigate(SETTINGS_SCREEN);
  };

  return (
    <ScreenContainer>
      <Header>
        <Appbar.Action icon="account-cog" onPress={goToSettings} size={30} />
        <Appbar.Content
          style={{alignItems: 'center'}}
          title="Poke App"
          subtitle="2FRONT"
        />
        <Appbar.Action icon="home-account" onPress={goToProfile} size={30} />
      </Header>
      <Text>Welcome to poke list</Text>
    </ScreenContainer>
  );
};

export default PokeListScreen;
