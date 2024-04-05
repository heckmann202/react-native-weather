import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {s} from './App.style'
import { Home } from './pages/Home/Home';
import { ImageBackground } from 'react-native';
import backgroundImg from './assets/background.png'
import { useEffect, useState } from 'react';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import { MateoAPI } from './api/meteo';
import {useFonts} from 'expo-font'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Forecasts } from './pages/Forecasts/Forecasts';

const Stack = createNativeStackNavigator()

const navTheme = {
  colors: {
    background: 'transparent'
  }
}

export default function App() {
  const [isFontLoaded] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf')
  })

  const [coordinates, setCoordinates] = useState()
  const [weather, setWeather] = useState()
  const [city, setCity] = useState()

  useEffect(() => {
    getuserCoordinates()
  }, [])

  useEffect(() => {
    if(coordinates){
      fetchWeatherFromCoords(coordinates)
      fetchCityFromCoords(coordinates)
    }
  }, [coordinates])

  const fetchCoordsByCity = async (city) => {
    const coordsResponse = await MateoAPI.fetchCoordsByCity(city)
    setCoordinates(coordsResponse)
  }
  
  const fetchWeatherFromCoords = async (coords) => {
    try {
      const weatherResponse = await MateoAPI.fetchWeatherByCoords(coords)
      setWeather(weatherResponse)

    } catch(err){
      console.log(err)
    }
  }

  const fetchCityFromCoords = async (coords) => {
    try {
      const cityResponse = await MateoAPI.fetchCityByCoords(coords)
      setCity(cityResponse)

    } catch(err){
      console.log(err)
    }
  }

  const getuserCoordinates = async () => {
    const {status} = await requestForegroundPermissionsAsync()
    if(status === 'granted'){
      const location = await getCurrentPositionAsync()
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      })
    } else {
      setCoordinates({
        lat: '48.85',
        lng: '2.35'
      })
    }
  }

  return (
    <NavigationContainer theme={navTheme}>

    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>

    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {isFontLoaded && weather && 
          <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false,
            animation: 'fade'
          }}>
            <Stack.Screen name="Home">
              {() => <Home weather={weather} city={city} onSubmitSearch={fetchCoordsByCity}/>}
            </Stack.Screen>
            <Stack.Screen name="Forecasts" component={Forecasts} />
          </Stack.Navigator>
}
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
    </NavigationContainer>
  );
}


