import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItem,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {ScreenContainer, Header, PokemonListItem} from '../../components';
import {
  PROFILE_SCREEN,
  saveUserDetails,
  SETTINGS_SCREEN,
} from '../../constants';
import {IMainNavScreenProps, IPokemon} from '../../types';
import {usePokemonAttributes, usePokemons} from '../../utils';
import {styles} from './style';

interface PokeListScreenProps extends IMainNavScreenProps {}

const PokeListScreen: React.FC<PokeListScreenProps> = ({navigation}) => {
  const {status, data} = usePokemons();
  const [modalVisible, setModalVisible] = useState(false);
  const {chosenPokemonData, setChosenPokemon, chosenPokemonStatus} =
    usePokemonAttributes();

  const goToProfile = () => {
    navigation.navigate(PROFILE_SCREEN);
  };
  const goToSettings = () => {
    navigation.navigate(SETTINGS_SCREEN);
  };

  const renderItem: ListRenderItem<IPokemon> = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setChosenPokemon(item.name);
        setModalVisible(true);
      }}>
      <PokemonListItem dataPokemon={item} key={item.url} />
    </TouchableOpacity>
  );

  return (
    <ScreenContainer>
      <Header
        goToScreenLeftIcon={goToProfile}
        goToScreenRightIcon={goToSettings}
        headerTitle="Poke List"
        leftIcon="home-account"
        rightIcon="account-cog"
        headerSubtitle="2front"
      />
      {status === 'loading' ? (
        <ActivityIndicator />
      ) : status === 'error' ? (
        <Text>Unable to process this request at the moment</Text>
      ) : status === 'success' ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      ) : null}
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
                  onPress={() => (
                    saveUserDetails(chosenPokemonData!, navigation),
                    setModalVisible(false)
                  )}>
                  <Text style={styles.textStyle}>
                    Would you like to choose this pokemon as your favorite?
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </Modal>
      </View>
    </ScreenContainer>
  );
};

export default PokeListScreen;
