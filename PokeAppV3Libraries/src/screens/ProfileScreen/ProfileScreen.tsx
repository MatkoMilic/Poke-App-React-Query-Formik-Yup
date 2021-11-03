import React from 'react';
import {Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import {ScreenContainer} from '../../components';
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
      <Appbar.Header>
        <Appbar.Action icon="account-cog" onPress={goToSettings} size={30} />
        <Appbar.Content
          style={{alignItems: 'center'}}
          title="Poke App"
          subtitle="2FRONT"
        />
        <Appbar.Action icon="clipboard-list" onPress={goToPokeList} size={30} />
      </Appbar.Header>
      <Text>Welcome to your profile</Text>
    </ScreenContainer>
  );
};

export default ProfileScreen;
