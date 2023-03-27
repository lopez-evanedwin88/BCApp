import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants/enums/Route';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const mainStack = () => (
    <>
      <Stack.Screen name={Route.MAIN_SCREEN} component={MainScreen} />
    </>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'none',
        }}>
        {mainStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
