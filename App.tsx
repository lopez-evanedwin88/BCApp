/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import RootStack from './src/navigation';
import globalStyles from './src/styles/GlobalStyles';

function App(): JSX.Element {
  return (
    <SafeAreaView style={globalStyles.flex1}>
      <RootStack />
    </SafeAreaView>
  );
}

export default App;
