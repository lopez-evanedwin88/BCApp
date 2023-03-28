/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import RootStack from './src/navigation';
import {RealmContext} from './src/realm/realmConfig';
import globalStyles from './src/styles/GlobalStyles';

function App(): JSX.Element {
  const {RealmProvider} = RealmContext;
  return (
    <RealmProvider>
      <SafeAreaView style={globalStyles.flex1}>
        <RootStack />
      </SafeAreaView>
    </RealmProvider>
  );
}

export default App;
