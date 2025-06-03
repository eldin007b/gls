import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={styles.title}>GLS Cijene</Text>
      <Text>Verzija: 1.0.0</Text>
      <Text>Autor: Eldin Begić</Text>
      <Text>Firma: B&D Kleintransporte KG</Text>
      <Text>Kontakt: begic.prodaja@gmail.com</Text>
      <Text>Lokacija: Klagenfurt, Austrija</Text>
      <Text style={{ marginTop: 20, textAlign: 'center' }}>
        Aplikacija razvijena za internu upotrebu firme za brži obračun i praćenje posebnih GLS vožnji.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});