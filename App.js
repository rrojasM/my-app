import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/splash';
import Home from './src/screens/home';
import Search from './src/screens/search';
import colors from './src/constants/colors';
import { getRecipesList } from './src/http';
import RecipeDetails from './src/screens/recipeDetails';

const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require('./assets/back.png')} />
    </Pressable>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF'
  },
}

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch(null, '15');
      setRecipes(rec);
      const healthyRec = await handleRecipesFetch('healthy', '5');
      setHealthyRecipes(healthyRec);
    })()
  }, []);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size);
      console.log('Recipes ===>: ', recipes);
      return recipes?.data?.results;
    } catch (error) {
      console.log('ERROR IN GET RECIPES LIST: ', error);
    }
  }

  return (
    <HealthyRecipesContext.Provider value={{ healthyRecipes, setHealthyRecipes }}>
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}>
            <Stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
            <Stack.Screen options={{ headerLeft: null, gestureEnabled: false }} name='Home' component={Home} />
            <Stack.Screen options={{ headerLeft: (props) => <BackButton {...props} /> }} name='Search' component={Search} />
            <Stack.Screen options={{ headerLeft: (props) => <BackButton {...props} />, title: '' }} name='RecipeDetails' component={RecipeDetails} />

          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>

  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16
  }
});
