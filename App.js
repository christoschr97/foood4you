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
// import { initializeApp } from "firebase";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyATSo7cEh1LZ0Vs4bt3aEO-U90x8VZxkng",
//   authDomain: "map-to-meal.firebaseapp.com",
//   projectId: "map-to-meal",
//   storageBucket: "map-to-meal.appspot.com",
//   messagingSenderId: "568610497735",
//   appId: "1:568610497735:web:a08e89f7ff148596778ae2",
//   measurementId: "G-68N7ZJRPDM",
// };

// initializeApp(firebaseConfig);

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   initializeApp
  //     .auth()
  //     .signInWithEmailAndPassword("ci.xristodoulou@gmail.com", "123456")
  //     .then((user) => {
  //       console.log(user);
  //       setIsAuthenticated(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
