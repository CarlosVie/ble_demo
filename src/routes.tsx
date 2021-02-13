import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScan from './screens/StartScan';
import SearchingDevice from './screens/SearchingDevice';
import DevicesList from './screens/DevicesList';
import DeviceDetails from './screens/DeviceDetails';

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
        name={'DevicesList'}
        component={DevicesList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'DeviceDetails'}
        component={DeviceDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
