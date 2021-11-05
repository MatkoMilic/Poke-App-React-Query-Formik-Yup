import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useTheme, TouchableRipple, Switch} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_SCREEN, navigatorNames, PROFILE_SCREEN} from '../../constants';
import style from './style';
import {StatusBar, ThemeContext, ScreenContainer} from '../../components';
import {IOnboardingNavScreenProps} from '../../types';

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const chooseNavigator = async () => {
    const isUserLoggedIn = await AsyncStorage.getItem('activeUser');
    if (isUserLoggedIn !== null) {
      navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
        screen: PROFILE_SCREEN,
      });
    } else {
      navigation.replace(LOGIN_SCREEN);
    }
  };

  useEffect(() => {
    chooseNavigator();
  }, []);

  return (
    <ScreenContainer>
      <StatusBar />
      <View style={style.titleView}>
        <Text style={[{color: theme.colors.text}, style.titleText]}>
          Welcome to Loading Screen
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default LoadingScreen;
