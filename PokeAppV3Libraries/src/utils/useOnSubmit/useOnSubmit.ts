import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUserValues, OnboardingNavigationType} from '../../types';
import {navigatorNames, PROFILE_SCREEN} from '../../constants';

const useOnSubmit = (navigation: OnboardingNavigationType) => {
  const signUpUser = (email: string, password: string) => {
    try {
      const userDetails: IUserValues = {
        email: email,
        password: password,
        favoritePokemon: 'pikachu',
        theme: 'light',
      };
      AsyncStorage.setItem(email, JSON.stringify(userDetails)).catch(
        (error) => {
          console.log(error);
        },
      );
      AsyncStorage.setItem('activeUser', email);
      navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
        screen: PROFILE_SCREEN,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logUserIn = async (email: string, password: string) => {
    const doesUserExistAlready = await AsyncStorage.getItem(email);
    const userParsed: IUserValues = JSON.parse(doesUserExistAlready || '{}');
    if (userParsed.password != password) {
      Alert.alert('Warning', 'Entered password is not correct!');
    } else {
      AsyncStorage.setItem('activeUser', email);
      navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
        screen: PROFILE_SCREEN,
      });
    }
  };

  const onSubmit = async (email: string, password: string) => {
    const doesUserExistAlready = await AsyncStorage.getItem(email);
    if (!doesUserExistAlready) {
      return signUpUser(email, password);
    } else if (doesUserExistAlready) {
      logUserIn(email, password);
    }
  };
  return {onSubmit};
};

export default useOnSubmit;
