import React from 'react';
import {Text, View} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTheme, TouchableRipple, Switch} from 'react-native-paper';
import {ScreenContainer} from '../../components/ScreenContainer';
import {
  OnboardingStackParamList,
  RootNavigatorParamsList,
} from '../../constants';
import style from './style';
import {StatusBar, PreferencesContext} from '../../components';

interface LoadingScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<OnboardingStackParamList, 'LoadingScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  navigation,
  children,
}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

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
