import React from 'react';
import {StatusBarProps, StatusBar} from 'react-native';
import {PreferencesContext} from '../PreferencesContext';

export interface IInputFieldProps extends StatusBarProps {}

const InputField: React.FC<IInputFieldProps> = ({...otherProps}) => {
  const {isThemeDark} = React.useContext(PreferencesContext);

  return (
    <StatusBar
      barStyle={isThemeDark ? 'light-content' : 'dark-content'}
      animated={true}
      {...otherProps}
    />
  );
};

export default InputField;
