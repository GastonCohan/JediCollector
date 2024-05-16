import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#1b3f54] items-center justify-center">
      <View className="pl-4 pr-4">
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
          />
          <TextInput
            className="h-10 bg-[#1B2227] mt-3 rounded p-2 border border-[#3B4954]"
            placeholder="Contraseña"
            placeholderTextColor="white"
            color={"white"}
          />
          <TouchableOpacity>
            <Text className="text-white text-center mt-4">Iniciar Sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white text-center mt-6 font-bold">
              No tengo una cuenta, quiero registrarme!
            </Text>
          </TouchableOpacity>
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
