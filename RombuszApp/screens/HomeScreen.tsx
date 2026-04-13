import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalcButton from '../components/CalcButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  CalcScreen: undefined;
  AboutScreen: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rombusz Terület Számoló</Text>
      <Text style={styles.description}>Ez az alkalmazás kiszámítja egy rombusz területét a két átló (e és f) hossza alapján.{'\n'}Formula: T = (e * f) / 2</Text>
      <CalcButton title="Számítás" onPress={() => navigation.navigate('CalcScreen')} />
      <CalcButton title="Névjegy" onPress={() => navigation.navigate('AboutScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 26,
    paddingHorizontal: 20,
  },
});
