import React from 'react';
import {useQuery} from 'react-query';
import {UserDetailsContext} from '../../components';
import {urls} from '../../constants';
import {IPokemonAttributes, ReactQueryStatusType} from '../../types';

interface IusePokemonAttributes {
  data?: IPokemonAttributes;
  error: ErrorConstructor | null;
  status: ReactQueryStatusType;
  chosenPokemonStatus: ReactQueryStatusType;
  chosenPokemonData: IPokemonAttributes | undefined;
  setChosenPokemon: React.Dispatch<React.SetStateAction<string>>;
}

const usePokemonAttributes = (): IusePokemonAttributes => {
  const abortController = new AbortController();
  const {favoritePokemon} = React.useContext(UserDetailsContext);
  const [chosenPokemon, setChosenPokemon] = React.useState<string>('');

  const fetchPokemonAttributes = async (): Promise<IPokemonAttributes> => {
    try {
      const response = await fetch(`${urls.pokemonsUrl + favoritePokemon}`, {
        signal: abortController.signal,
      });
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error);
    }
  };
  const fetchSpecificPokemonAttributes = async (
    chosenPokemon: string,
  ): Promise<IPokemonAttributes> => {
    try {
      const response = await fetch(`${urls.pokemonsUrl + chosenPokemon}`, {
        signal: abortController.signal,
      });
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error);
    }
  };
  const {data, status, error} = useQuery<IPokemonAttributes, ErrorConstructor>(
    ['pokemons', favoritePokemon],
    () => fetchPokemonAttributes(),
  );
  const {data: chosenPokemonData, status: chosenPokemonStatus} = useQuery<
    IPokemonAttributes,
    ErrorConstructor
  >(
    ['pokemonsAttributes', chosenPokemon],
    () => fetchSpecificPokemonAttributes(chosenPokemon),
    {enabled: !!chosenPokemon},
  );
  return {
    data,
    chosenPokemonData,
    status,
    chosenPokemonStatus,
    error,
    setChosenPokemon,
  };
};
export default usePokemonAttributes;
