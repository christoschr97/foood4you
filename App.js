import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigator } from "./src/infrastructure/navigation/index";
import { getApps, initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// // Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATSo7cEh1LZ0Vs4bt3aEO-U90x8VZxkng",
  authDomain: "map-to-meal.firebaseapp.com",
  projectId: "map-to-meal",
  storageBucket: "map-to-meal.appspot.com",
  messagingSenderId: "568610497735",
  appId: "1:568610497735:web:a08e89f7ff148596778ae2",
  measurementId: "G-68N7ZJRPDM",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigator />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
