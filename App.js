import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://uniwheels-frontend.herokuapp.com/' }}
        style={{ marginTop: 30 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
