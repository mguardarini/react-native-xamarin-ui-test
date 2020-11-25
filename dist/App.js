import React from 'react';
import { Login } from './src/features/login';
import { SpeakerProfile } from './src/features/speaker-profile';
import { Home } from './src/features/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Stack.Navigator, null,
            React.createElement(Stack.Screen, { name: "login", component: Login }),
            React.createElement(Stack.Screen, { name: "speaker-profile", component: SpeakerProfile }),
            React.createElement(Stack.Screen, { name: "talks", component: Home }))));
};
export default App;