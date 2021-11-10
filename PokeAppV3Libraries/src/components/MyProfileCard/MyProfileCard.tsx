import React, {useContext, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {IUserValues} from '../../types';
import {usePokemonAttributes} from '../../utils';
import {PokemonAttributesItem} from '../PokemonAttributesItem';
import {styles} from './styles';
import {UserDetailsContext} from '../UserDetailsProvider';

const MyProfileCard: React.FC = () => {
  useState<IUserValues>();
  const {data, status} = usePokemonAttributes();
  const {email, favoritePokemon} = useContext(UserDetailsContext);

  return (
    <View>
      <Text style={styles.welcomeText}>
        Hello {email}, your favorite pokemon currently is {favoritePokemon}.
      </Text>
      {status === 'loading' ? (
        <ActivityIndicator />
      ) : status === 'error' ? (
        <Text>Unable to process this request at the moment</Text>
      ) : data ? (
        <PokemonAttributesItem data={data} />
      ) : null}
    </View>
  );
};

export default MyProfileCard;
