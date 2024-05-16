import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, ActivityIndicator, View } from "react-native";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import app, { auth } from "./firebaseConfig"; // Importa el módulo de autenticación
import SignIn from "./screens/SingIn";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    app;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
