import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        navigation.navigate("Home");
      }
    };
    checkUser();
  }, []);

  const handleLogin = async () => {
    try {
      const auth = getAuth(app);
      const response = await signInWithEmailAndPassword(auth, email, password);
      await AsyncStorage.setItem("user", JSON.stringify(response.user));
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", error.message);
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      const auth = getAuth(app);
      await auth.signOut();
      await AsyncStorage.removeItem("user");
      navigation.navigate("SignIn");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1b3f54] items-center justify-center">
      <View className="pl-4 pr-4 pt-10 pb-6">
        <View className="mt-2">
          <Text className="text-white mt-2 font-bold text-xl text-center">
            INICIA SESION
          </Text>
          <Text className="text-white mt-2 font-bold text-xl text-center">
            JOVEN PADAWAN
          </Text>
          <View className="justify-center items-center mt-2">
            <Image
              source={require("../assets/SignIn.png")}
              className="h-60 w-60"
            />
          </View>
        </View>
        <View>
          <Text className="text-white text-center text-lg font-bold">
            La fuerza es fuerte en ti.
          </Text>
          <Text className="text-white text-center text-base font-bold">
            Inicia sesion para ver los mejores productos.
          </Text>
          <TextInput
            className="h-10 bg-[#1B2227] mt-5 rounded p-2 border border-[#3B4954]"
            placeholder="Email"
            placeholderTextColor="white"
            color={"white"}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            textContentType="none"
          />
          <View className="flex-row items-center mt-3 relative w-full">
            <TextInput
              className="flex-1 h-10 bg-[#1B2227] rounded p-2 border border-[#3B4954] text-white pr-10"
              placeholder="Contraseña"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4"
            >
              <FontAwesome
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-white text-center mt-4">Iniciar Sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-white text-center mt-2">
              Olvide mi contraseña
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="text-white text-center mt-4 font-bold">
              No tengo una cuenta, quiero registrarme!
            </Text>
          </TouchableOpacity>
          <View className="mt-3 mb-0">
            <View className="mt-3 rounded-xl bg-black">
              <TouchableOpacity className="flex-row items-center justify-center h-10">
                <FontAwesome name="google" size={24} color="red" />
                <Text className="text-white p-2 text-center">
                  Inicia sesion con Gmail
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mt-3 rounded-xl bg-black">
              <TouchableOpacity className="flex-row items-center justify-center h-10">
                <FontAwesome name="facebook" size={24} color="blue" />
                <Text className="text-white p-2 text-center">
                  Inicia sesion con Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mt-3 rounded-xl bg-black">
              <TouchableOpacity className="flex-row items-center justify-center h-10">
                <FontAwesome name="apple" size={24} color="white" />
                <Text className="text-white p-2 text-center">
                  Inicia sesion con Apple
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text className="text-white text-center mt-4 mb-5 text-xs">
            Al iniciar sesion, aceptas los Términos de Uso y reconoces las
            prácticas de datos en nuestra propia Política de Privacidad{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
