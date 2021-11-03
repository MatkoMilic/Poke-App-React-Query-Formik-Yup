import React from 'react';
import {Appbar as RNPaperAppbar} from 'react-native-paper';
import {styles} from './styles';

type RNAppbarProps = React.ComponentProps<typeof RNPaperAppbar>;
type IHeader = RNAppbarProps & {};

const Header: React.FC<IHeader> = ({...otherProps}) => {
  return <RNPaperAppbar.Header style={styles.header} {...otherProps} />;
};

export default Header;
