import React from 'react';
import {Text, View} from 'react-native';
import {Appbar, Switch, useTheme} from 'react-native-paper';
import {POKELIST_SCREEN, PROFILE_SCREEN} from '../../constants';
import {PreferencesContext, ScreenContainer, Header} from '../../components';
import style from './style';
import {IMainNavScreenProps} from '../../types';

interface SettingsScreenProps extends IMainNavScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  const goToProfile = () => {
    navigation.navigate(PROFILE_SCREEN);
  };
  const goToPokeList = () => {
    navigation.navigate(POKELIST_SCREEN);
  };

  return (
    <ScreenContainer>
      <Header>
        <Appbar.Action icon="home-account" onPress={goToProfile} size={30} />
        <Appbar.Content
          style={style.headerContent}
          title="Poke App"
          subtitle="2FRONT"
        />
        <Appbar.Action icon="clipboard-list" onPress={goToPokeList} size={30} />
      </Header>
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
