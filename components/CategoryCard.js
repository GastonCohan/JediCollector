import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  console.log(imgUrl);
  return (
    <TouchableOpacity className="relative mr-2 bg-red">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
