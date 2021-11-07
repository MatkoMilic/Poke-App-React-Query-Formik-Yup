import React from 'react';
import {Text, View} from 'react-native';
import {Button, Switch, useTheme} from 'react-native-paper';
import {
  LOGIN_SCREEN,
  navigatorNames,
  POKELIST_SCREEN,
  PROFILE_SCREEN,
  removeActiveUser,
} from '../../constants';
import {ThemeContext, ScreenContainer, Header} from '../../components';
import style from './style';
import {IMainNavScreenProps} from '../../types';

interface SettingsScreenProps extends IMainNavScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);

  const logoutUser = async () => {
    removeActiveUser();
    navigation.replace(navigatorNames.ONBOARDING_NAVIGATOR, {
      screen: LOGIN_SCREEN,
    });
  };

  const goToProfile = () => {
    navigation.navigate(PROFILE_SCREEN);
  };
  const goToPokeList = () => {
    navigation.navigate(POKELIST_SCREEN);
  };

  return (
    <ScreenContainer>
      <Header
        goToScreenLeftIcon={goToProfile}
        goToScreenRightIcon={goToPokeList}
        headerTitle="Poke Settings"
        leftIcon="home-account"
        rightIcon="clipboard-list"
        headerSubtitle="2front"
      />
      <Text>Welcome to settings screen</Text>
      <View style={style.switchView}>
        <Switch
          style={style.switchElement}
          color={theme.colors.text}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </View>
      <Button onPress={logoutUser}>LOG OUT</Button>
    </ScreenContainer>
  );
};

export default SettingsScreen;
