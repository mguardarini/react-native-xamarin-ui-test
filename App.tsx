import React from 'react';
import { Login } from './src/features/login';
import { SpeakerProfile } from './src/features/speaker-profile';
import { Home } from './src/features/home'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name="login"
              component={Login} />
           <Stack.Screen
              name="speaker-profile"
              component={SpeakerProfile} />
          <Stack.Screen
              name="talks"
              component={Home} />                
        </Stack.Navigator>
      </NavigationContainer>
    )
};

export default App;

