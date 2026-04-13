import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CalcButton from '../components/CalcButton';
import { useNavigation } from '@react-navigation/native';
import { calculateRombuszArea } from '../utils/rhombusCalc';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  CalcScreen: undefined;
  AboutScreen: undefined;
};

type CalcScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CalcScreen'>;

export default function CalcScreen() {
  const navigation = useNavigation<CalcScreenNavigationProp>();
  const [e, setE] = useState('');
  const [f, setF] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const numE = parseFloat(e);
    const numF = parseFloat(f);
    if (isNaN(numE) || isNaN(numF) || numE <= 0 || numF <= 0) {
      Alert.alert('Hiba', 'Kérlek, adj meg pozitív számokat mindkét átlóhoz!');
      return;
    }
    const area = calculateRombuszArea(numE, numF);
    setResult(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rombusz Terület Számítása</Text>
      <Text style={styles.subtitle}>T = (e * f) / 2</Text>
      <CustomInput
        label="Első átló (e)"
        value={e}
        onChangeText={setE}
        placeholder="pl. 10"
        keyboardType="numeric"
      />
      <CustomInput
        label="Második átló (f)"
        value={f}
        onChangeText={setF}
        placeholder="pl. 10"
        keyboardType="numeric"
      />
      <CalcButton title="Számítás" onPress={handleCalculate} />
      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Terület: {result.toFixed(2)} egységnégyzet</Text>
        </View>
      )}
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    marginBottom: 30,
  },
  resultContainer: {
    backgroundColor: '#10b981',
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  resultText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
