import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  const navigation = useNavigation();
  const products = [
    {
      id: 1,
      short_description: "lorem ipsum, lorem ipsum lorem ipsum",
      name: "Blister Pack",
      image:
        "https://vintagestoretoys.com/wp-content/uploads/2023/03/star-wars-the-bad-batch-vintage-collection-special-pack2.webp",
    },
    {
      id: 2,
      short_description: "lorem ipsum, lorem ipsum lorem ipsum",
      name: "MOC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjuEyPNb3RE4fqMOy5eTZuIZRzunJVAcpbOyqZ_QSJFg&s",
    },
    {
      id: 3,
      short_description: "lorem ipsum, lorem ipsum lorem ipsum",
      name: "Loose",
      image:
        "https://ae01.alicdn.com/kf/H5a7ed551f7254cbfbceee2264ac81fb7J/Lot-of-5-Star-Wars-Republic-Plain-White-Clone-Trooper-3-75-Loose-Action-Figure.jpg",
    },
    {
      id: 4,
      short_description: "lorem ipsum, lorem ipsum lorem ipsum",
      name: "Carded",
      image:
        "https://www.vintagestarwarscollectables.co.uk/images/Star%20Wars/logos/MOCvintage.jpg",
    },
    {
      id: 5,
      short_description: "lorem ipsum, lorem ipsum lorem ipsum",
      name: "Boxed",
      image:
        "https://hellosubscription.com/wp-content/uploads/2024/01/image_6596638c3f5be.png?quality=90&strip=all",
    },
  ];

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/rebeld.png")}
          className="h-7 w-7 bg-grey-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-grey-400 text-xl text-center">
            JEDI COLLECTOR
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
          <ShoppingBagIcon size={30} color={"black"} />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={"black"} />
          <TextInput placeholder="Buscar..." keyboardType="default" />
        </View>
      </View>

      <ScrollView
        className="bg-grey-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories categories={products} />

        {products?.map((item) => {
          return (
            <FeaturedRow
              title={item.name}
              description={item.short_description}
              id={item._id}
              key={item._id}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
