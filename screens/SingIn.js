import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebaseConfig";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("gastoncohan3@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async () => {
    try {
      const auth = getAuth(app);
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("Home");
    } catch (error) {
      // Error al iniciar sesión, muestra un mensaje de alerta con el error
      Alert.alert("Error", error.message);
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1b3f54] items-center justify-center">
      <View className="pl-4 pr-4 pt-10 pb-6">
        <View className="mt-2">
          <Text className="text-white mt-2 font-bold text-xl text-center ">
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
          <TextInput
            className="h-10 bg-[#1B2227] mt-3 rounded p-2 border border-[#3B4954]"
            placeholder="Contraseña"
            placeholderTextColor="white"
            color={"white"}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-white text-center mt-4">Iniciar Sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="text-white text-center mt-6 font-bold">
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
                  {" "}
                  Inicia sesion con Apple
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text className="text-white text-center mt-6 mb-5 text-xs">
            Al iniciar sesion, aceptas los Términos de Uso y reconoces las
            prácticas de datos en nuestra propia Política de Privacidad{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
