import {
  LOADING_SCREEN,
  POKELIST_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
} from './screenNames/screenNames';
import {navigatorNames} from './navigatorNames/navigatorNames';
import {
  OnboardingStackParamList,
  MainStackParamList,
  RootNavigatorParamsList,
  RootNavigatorNameType,
} from './navigatorTypes/navigatorTypes';
import {urls} from './urls/urls';
import {
  getActiveUser,
  getActiveUserDetails,
  removeActiveUser,
  saveUserDetails,
} from './asyncStorageFunctions/asyncStorageFunctions';

export {
  LOADING_SCREEN,
  POKELIST_SCREEN,
  LOGIN_SCREEN,
  SETTINGS_SCREEN,
  PROFILE_SCREEN,
  navigatorNames,
  urls,
  getActiveUser,
  getActiveUserDetails,
  removeActiveUser,
  saveUserDetails,
};

export type {
  OnboardingStackParamList,
  MainStackParamList,
  RootNavigatorParamsList,
  RootNavigatorNameType,
};
