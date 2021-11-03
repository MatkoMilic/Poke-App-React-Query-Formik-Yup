import React from 'react';
import {Appbar, Appbar as RNPaperAppbar} from 'react-native-paper';

type RNAppbarProps = React.ComponentProps<typeof RNPaperAppbar>;
type IHeader = RNAppbarProps & {};

const Header: React.FC<IHeader> = ({...otherProps}) => {
  return <Appbar.Header {...otherProps} />;
};

export default Header;
