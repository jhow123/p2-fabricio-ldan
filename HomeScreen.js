import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Lógica de logout aqui (por exemplo, limpar o AsyncStorage)
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./bem-vindo.gif')}
        style={{ width: '100%', height: '50%', marginBottom: 20, resizeMode: 'contain' }}
      />
      <Text style={{ fontSize: 24, marginBottom: 20 }}>VOCÊ É O MELHOR!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
