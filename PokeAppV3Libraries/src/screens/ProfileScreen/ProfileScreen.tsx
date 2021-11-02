import React from 'react';
import {Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';
import {ScreenContainer} from '../../components/ScreenContainer';
import {
  navigatorNames,
  OnboardingStackParamList,
  POKELIST_SCREEN,
  RootNavigatorParamsList,
  SETTINGS_SCREEN,
} from '../../constants';

interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<OnboardingStackParamList, 'LoadingScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const goToSettings = () => {
    navigation.navigate(navigatorNames.MAIN_NAVIGATOR, {
      screen: SETTINGS_SCREEN,
    });
  };
  const goToPokeList = () => {
    navigation.navigate(navigatorNames.MAIN_NAVIGATOR, {
      screen: POKELIST_SCREEN,
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
        <Appbar.Action icon="clipboard-list" onPress={goToPokeList} size={30} />
      </Appbar.Header>
      <Text>Welcome to your profile</Text>
    </ScreenContainer>
  );
};

export default ProfileScreen;
