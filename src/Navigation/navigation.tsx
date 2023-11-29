import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import MovieDetails from '../screens/MovieDetails';
import routes from './routes';
import colors from '../styles/colors';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={routes.MOVIE_PAGE}
          component={HomePage}
        />
        <Stack.Screen
          options={{
            title: 'Movie Detail',
            headerTintColor: colors.text,
            headerStyle: {
              backgroundColor: colors.primary,
            },
          }}
          name={routes.MOVIE_DETAIL_PAGE}
          component={MovieDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;