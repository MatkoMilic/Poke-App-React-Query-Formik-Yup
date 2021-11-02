import React from 'react';
import {Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';
import {ScreenContainer} from '../../components/ScreenContainer';
import {
  MainStackParamList,
  navigatorNames,
  PROFILE_SCREEN,
  RootNavigatorParamsList,
  SETTINGS_SCREEN,
} from '../../constants';

interface PokeListScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'PokeListScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const PokeListScreen: React.FC<PokeListScreenProps> = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate(navigatorNames.MAIN_NAVIGATOR, {
      screen: PROFILE_SCREEN,
    });
  };
  const goToSettings = () => {
    navigation.navigate(navigatorNames.MAIN_NAVIGATOR, {
      screen: SETTINGS_SCREEN,
    });
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
        <Appbar.Action icon="home-account" onPress={goToProfile} size={30} />
      </Appbar.Header>
      <Text>Welcome to poke list</Text>
    </ScreenContainer>
  );
};

export default PokeListScreen;
