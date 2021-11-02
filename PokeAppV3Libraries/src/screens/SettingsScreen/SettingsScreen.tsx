import React from 'react';
import {Text, View} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Appbar, Switch, useTheme} from 'react-native-paper';
import {ScreenContainer} from '../../components/ScreenContainer';
import {
  navigatorNames,
  OnboardingStackParamList,
  POKELIST_SCREEN,
  PROFILE_SCREEN,
  RootNavigatorParamsList,
} from '../../constants';
import {PreferencesContext} from '../../components';
import style from './style';

interface SettingsScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<OnboardingStackParamList, 'LoadingScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  const goToProfile = () => {
    navigation.navigate(navigatorNames.MAIN_NAVIGATOR, {
      screen: PROFILE_SCREEN,
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
        <Appbar.Action icon="home-account" onPress={goToProfile} size={30} />
        <Appbar.Content
          style={style.headerContent}
          title="Poke App"
          subtitle="2FRONT"
        />
        <Appbar.Action icon="clipboard-list" onPress={goToPokeList} size={30} />
      </Appbar.Header>
      <Text>Welcome to settings screen</Text>
      <View style={style.switchView}>
        <Switch
          style={style.switchElement}
          color={theme.colors.text}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </View>
    </ScreenContainer>
  );
};

export default SettingsScreen;
