import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";

const App = () => {
  const [email, setEmail] = useState<String>("");
  const [name, setName] = useState<String>("");
  const [telephone, setTelephone] = useState<String>("");
  const [address, setAddress] = useState<String>("");
  const [modalVisible, setModalVisible] = useState(false);

  const cadastrar = () => {
    // Alert.alert(`Sucesso`, `E-mail: ${email} \nNome: ${name} \nTelefone: ${telephone} \nEndereço: ${address}`);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          placeholderTextColor="#FFFF00"
          keyboardType="email-address"
          maxLength={25}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nome"
          placeholderTextColor="#FFFF00"
          maxLength={50}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Telefone"
          placeholderTextColor="#FFFF00"
          keyboardType="numeric"
          maxLength={11}
          onChangeText={setTelephone}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Endereço"
          placeholderTextColor="#FFFF00"
          maxLength={100}
          onChangeText={setAddress}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrar}
          activeOpacity={0.8}
        >
          <Text style={styles.label}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Sucesso!
            </Text>
            <Text style={styles.modalText}>
              E-mail: {email}
            </Text>
            <Text style={styles.modalText}>
              Nome: {name}
            </Text>
            <Text style={styles.modalText}>
              Telefone: {telephone}
            </Text>
            <Text style={styles.modalText}>
              Endereço: {address}
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>



  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#000",
  },
  title: {
    flex: 1,
    fontSize: 26,
    marginTop: 150,
    fontWeight: "bold",
    color: "#FFFF00",
  },
  containerInputs: {
    flex: 4,
  },
  textInput: {
    justifyContent: "center",
    borderWidth: 0.3,
    borderBottomColor: "#FFFF00",
    color: "#FFFF00",
    marginTop: 8,
    padding: 5,
  },
  button: {
    height: 45,
    backgroundColor: "#FFFF00",
    justifyContent: "center",
    marginTop: 16,
    borderRadius: 5,
  },
  label: {
    color: "#000",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#FFFF00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center"
  },
});
