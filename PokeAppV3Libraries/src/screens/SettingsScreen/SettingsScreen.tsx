import React from 'react';
import {Text, View} from 'react-native';
import {Switch, useTheme} from 'react-native-paper';
import {POKELIST_SCREEN, PROFILE_SCREEN} from '../../constants';
import {ThemeContext, ScreenContainer, Header} from '../../components';
import style from './style';
import {IMainNavScreenProps} from '../../types';

interface SettingsScreenProps extends IMainNavScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);

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
    </ScreenContainer>
  );
};

export default SettingsScreen;
