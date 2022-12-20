import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/splash';
import Home from './src/screens/home';
import Search from './src/screens/search';
import colors from './src/constants/colors';

const Stack = createStackNavigator();

export default function App() {

  const BackButton = (props) => {
    console.log(props);
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


  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}>
        <Stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
        <Stack.Screen options={{ headerLeft: null, gestureEnabled: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerLeft: (props) => <BackButton {...props} /> }} name='Search' component={Search} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16
  }
});
