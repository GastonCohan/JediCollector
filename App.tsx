import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screens/SignUp";
import { StatusBar } from "react-native";
import SignIn from "./screens/SingIn";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
