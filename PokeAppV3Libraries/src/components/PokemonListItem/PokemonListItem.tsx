import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native-paper';
import {
  getActiveUser,
  getActiveUserDetails,
  MainStackParamList,
  RootNavigatorParamsList,
} from '../../constants';
import {IPokemon, IPokemonAttributes} from '../../types';
import {usePokemonAttributes} from '../../utils';
import {styles} from './styles';

interface PokemonItemProps {
  dataPokemon: IPokemon;
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const PokemonListItem: React.FC<PokemonItemProps> = ({
  dataPokemon,
  navigation,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {chosenPokemonData, setChosenPokemon, chosenPokemonStatus} =
    usePokemonAttributes();

  const getCurrentUserUpdated = async (data: IPokemonAttributes) => {
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

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            {chosenPokemonStatus == 'loading' ? (
              <ActivityIndicator />
            ) : (
              <View style={styles.modalView}>
                <Text
                  style={
                    styles.modalText
                  }>{`Pokemons name: ${chosenPokemonData?.name}`}</Text>
                <Text
                  style={
                    styles.modalText
                  }>{`${chosenPokemonData?.name}'s weight: ${chosenPokemonData?.weight}`}</Text>
                <Text
                  style={
                    styles.modalText
                  }>{`${chosenPokemonData?.name}'s height: ${chosenPokemonData?.height}`}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Close Pokemon Details</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.button,
                    styles.buttonClose,
                    {backgroundColor: 'red'},
                  ]}
                  onPress={() => getCurrentUserUpdated(chosenPokemonData!)}>
                  <Text style={styles.textStyle}>
                    Would you like to choose this pokemon as your favorite?
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        onPress={() => {
          setChosenPokemon(dataPokemon.name);
          console.log(dataPokemon.name);
          setModalVisible(true);
        }}>
        <Text style={styles.pokemonListItem}>{dataPokemon.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonListItem;
