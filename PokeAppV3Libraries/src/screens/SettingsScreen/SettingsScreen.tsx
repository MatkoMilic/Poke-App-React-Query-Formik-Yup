import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, Switch, useTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getActiveUser,
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
  const [currentUser, setCurrentUser] = useState('');

  const logoutUser = async () => {
    removeActiveUser();
    navigation.replace(navigatorNames.ONBOARDING_NAVIGATOR, {
      screen: LOGIN_SCREEN,
    });
  };

  const deleteUser = async () => {
    await AsyncStorage.removeItem(currentUser);
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

  const setUserDetails = async () => {
    const loggedUser = await getActiveUser();
    if (loggedUser) setCurrentUser(loggedUser);
  };

  useEffect(() => {
    setUserDetails();
  }, []);

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
      <TouchableOpacity onPress={deleteUser}>
        <Text style={style.deleteButton}>DELETE YOUR ACCOUNT</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default SettingsScreen;
