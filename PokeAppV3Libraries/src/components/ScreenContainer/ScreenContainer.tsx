import React from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './styles';

interface ScreenContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  return <View style={[styles.container, style]}>{children}</View>;
};

ScreenContainer.defaultProps = {
  children: undefined,
  style: undefined,
};

export default ScreenContainer;
