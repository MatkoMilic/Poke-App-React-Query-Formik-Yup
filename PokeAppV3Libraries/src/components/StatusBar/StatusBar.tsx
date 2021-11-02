import React from 'react';
import {StatusBarProps, StatusBar as RnStatusBar} from 'react-native';
import {PreferencesContext} from '../PreferencesContext';

export interface IStatusBarProps extends StatusBarProps {}

const StatusBar: React.FC<IStatusBarProps> = ({...otherProps}): JSX.Element => {
  const {isThemeDark} = React.useContext(PreferencesContext);

  return (
    <RnStatusBar
      barStyle={isThemeDark ? 'light-content' : 'dark-content'}
      animated={true}
      {...otherProps}
    />
  );
};

export default StatusBar;
