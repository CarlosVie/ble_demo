import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScan from './screens/StartScan';
import SearchingDevice from './screens/SearchingDevice';
import FoundDevice from './screens/FoundDevice';
import ConnectDevice from './screens/Device';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={'Home'}
        component={StartScan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SearchingDevice'}
        component={SearchingDevice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'FoundDevice'}
        component={FoundDevice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Device'}
        component={ConnectDevice}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
