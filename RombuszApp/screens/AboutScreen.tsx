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

type AboutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AboutScreen'>;

export default function AboutScreen() {
  const navigation = useNavigation<AboutScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Névjegy</Text>
      <Text style={styles.info}>Készítette: Zsitnyák Ádám</Text>
      <Text style={styles.info}>Osztály/Csoport: SZOFT II/N</Text>
      <Text style={styles.info}>Készítés dátuma: 2026-04-13</Text>
      <Text style={styles.desc}>Ez az alkalmazás kiszámítja egy rombusz területét a két átló segítségével.</Text>
      <CalcButton title="Vissza a főoldalra" onPress={() => navigation.goBack()} />
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 30,
  },
  info: {
    fontSize: 18,
    color: '#475569',
    marginBottom: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
});
