import React from 'react';
import {useQuery} from 'react-query';
import {UserDetailsContext} from '../../components/UserDetailsProvider/UserDetailsProvider';
import {urls} from '../../constants';
import {IPokemonAttributes, ReactQueryStatusType} from '../../types';

interface IusePokemonAttributes {
  data?: IPokemonAttributes;
  error: ErrorConstructor | null;
  status: ReactQueryStatusType;
  fetchPokemonAttributes: () => Promise<IPokemonAttributes>;
}

const usePokemonAttributes = (): IusePokemonAttributes => {
  const abortController = new AbortController();
  const {favoritePokemon} = React.useContext(UserDetailsContext);

  const fetchPokemonAttributes = async (): Promise<IPokemonAttributes> => {
    try {
      const response = await fetch(`${urls.baseUrl + favoritePokemon}`, {
        signal: abortController.signal,
      });
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error);
    }
  };

  const {data, status, error} = useQuery<IPokemonAttributes, ErrorConstructor>(
    ['pokemonsAttributes', favoritePokemon],
    () => fetchPokemonAttributes(),
    {enabled: !!favoritePokemon},
  );
  return {data, status, error, fetchPokemonAttributes};
};
export default usePokemonAttributes;
