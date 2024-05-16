import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#1b3f54] items-center justify-center">
      <View className="pl-4 pr-4">
        <View className="mt-2 mb-5">
          <Text className="text-white mt-2 font-bold text-xl text-center ">
            REGISTRATE
          </Text>
          <Text className="text-white mt-2 font-bold text-xl text-center">
            JOVEN PADAWAN
          </Text>
          <View className="justify-center items-center mt-2">
            <Image
              source={require("../assets/SignUp.png")}
              className="h-60 w-60"
            />
          </View>
        </View>
        <View>
          <Text className="text-white text-center text-lg font-bold">
            La fuerza es fuerte en ti.
          </Text>
          <Text className="text-white text-center text-base font-bold">
            Registrate para ver los mejores productos.
          </Text>
          <TextInput
            className="h-10 bg-[#1B2227] mt-5 rounded p-2 border border-[#3B4954]"
            placeholder="Email"
            placeholderTextColor="white"
            color={"white"}
          />
          <TouchableOpacity>
            <Text className="text-white text-center mt-4">Registrarse</Text>
          </TouchableOpacity>
          <View className="mt-3 mb-0">
            <View className="mt-3 rounded-xl bg-black">
              <TouchableOpacity className="flex-row items-center justify-center h-10">
                <FontAwesome name="google" size={24} color="red" />
                <Text className="text-white p-2 text-center">
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mt-3 rounded-xl bg-black">
              <TouchableOpacity className="flex-row items-center justify-center h-10">
                <FontAwesome name="facebook" size={24} color="blue" />
                <Text className="text-white p-2 text-center">
                  Continue with Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mt-3 rounded-xl bg-black">
              <TouchableOpacity className="flex-row items-center justify-center h-10">
                <FontAwesome name="apple" size={24} color="white" />
                <Text className="text-white p-2 text-center">
                  {" "}
                  Continue with Apple
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text className="text-white text-center mt-6">
              Ya tienes una cuenta, inicia sesion.
            </Text>
          </TouchableOpacity>
          <Text className="text-white text-center mt-6 mb-5 text-xs">
            Al continuar, aceptas los Términos de Uso y reconoces las prácticas
            de datos en nuestra propia Política de Privacidad{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
