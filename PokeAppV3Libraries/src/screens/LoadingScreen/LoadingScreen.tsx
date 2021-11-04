import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useTheme, TouchableRipple, Switch} from 'react-native-paper';
import {navigatorNames, PROFILE_SCREEN} from '../../constants';
import style from './style';
import {StatusBar, ThemeContext, ScreenContainer} from '../../components';
import {IOnboardingNavScreenProps} from '../../types';

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  navigation,
  children,
}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);

  useEffect(() => {
    navigation.navigate(navigatorNames.MAIN_NAVIGATOR, {
      screen: PROFILE_SCREEN,
    });
  }, []);

  return (
    <ScreenContainer>
      <StatusBar />
      <View style={style.titleView}>
        <Text style={[{color: theme.colors.text}, style.titleText]}>
          Welcome to Loading Screen
        </Text>
        <TouchableRipple>
          <Switch
            style={[{backgroundColor: theme.colors.text}, style.switchElement]}
            color={theme.colors.text}
            value={isThemeDark}
            onValueChange={toggleTheme}
          />
        </TouchableRipple>
      </View>
    </ScreenContainer>
  );
};

export default LoadingScreen;
