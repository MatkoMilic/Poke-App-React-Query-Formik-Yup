import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  OnboardingStackParamList,
  RootNavigatorParamsList,
} from '../../constants';

export interface IOnboardingNavScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<OnboardingStackParamList>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}
