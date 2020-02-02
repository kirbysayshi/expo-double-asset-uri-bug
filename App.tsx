import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';

const test = Asset.fromModule(require('./assets/icon.png'));

// This should log something like: `http://localhost:[port]/assets/icon.png?[long query]
// but instead is: `http://localhost:[port]/assets/assets/icon.png?[long query]
// Curling this results in a 404 / error!
console.log(test.uri);

// This produces a working, expected URL.
// Curling this downloads the file.
const normalized = test.uri.replace(/(assets\/)+/g, 'assets/');
console.log(normalized);



export default function App() {
  return (
    <View>
      <Text>{test.uri}</Text>
    </View>
  );
}