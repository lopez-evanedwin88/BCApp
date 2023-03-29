import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants/enums/Route';
import ListScreen from '../screens/ListScreen';
import ItemScreen from '../screens/ItemScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const mainStack = () => (
    <>
      <Stack.Screen name={Route.LIST_SCREEN} component={ListScreen} />
      <Stack.Screen
        name={Route.ITEM_SCREEN}
        component={ItemScreen}
        options={{headerShown: true, headerBackTitle: 'Back'}}
      />
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
