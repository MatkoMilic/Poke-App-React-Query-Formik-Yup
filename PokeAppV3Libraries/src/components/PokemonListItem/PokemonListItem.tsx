import React from 'react';
import {Text, View} from 'react-native';
import {IPokemon} from '../../types';
import {styles} from './styles';

const PokemonListItem: React.FC<IPokemon> = ({name}) => {
  return (
    <View>
      <Text style={styles.pokemonListItem}>{name}</Text>
    </View>
  );
};

export default PokemonListItem;
