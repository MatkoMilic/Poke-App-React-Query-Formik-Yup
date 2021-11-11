import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {IPokemonAttributes, IUserValues, MainNavigationType} from '../../types';

export const getActiveUser = async () => {
  const activeUser = await AsyncStorage.getItem('activeUser');
  return activeUser;
};

export const removeActiveUser = async () => {
  await AsyncStorage.removeItem('activeUser');
};

export const getActiveUserDetails = async () => {
  const email = await getActiveUser();
  if (email) {
    const details = await AsyncStorage.getItem(email);
    if (details) {
      const userDetailsParsed: IUserValues = JSON.parse(details);
      return userDetailsParsed;
    }
  }
};

export const saveUserDetails = async (
  data: IPokemonAttributes,
  navigation: MainNavigationType,
) => {
  const loggedUser = await getActiveUser();
  const loggedUserValues = await getActiveUserDetails();
  if (loggedUserValues) {
    loggedUserValues.favoritePokemon = data.name;
  }
  if (loggedUser) {
    AsyncStorage.setItem(loggedUser, JSON.stringify(loggedUserValues));
    Alert.alert('Your new favorite pokemon is saved! :)');
    navigation.push('ProfileScreen');
  }
};
