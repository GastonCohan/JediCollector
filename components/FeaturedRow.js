import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  const products = [
    {
      id: 1,
      short_description: "lorem ipsum",
      name: "Blister Pack",
      image:
        "https://vintagestoretoys.com/wp-content/uploads/2023/03/star-wars-the-bad-batch-vintage-collection-special-pack2.webp",
    },
    {
      id: 2,
      short_description: "lorem ipsum",
      name: "MOC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjuEyPNb3RE4fqMOy5eTZuIZRzunJVAcpbOyqZ_QSJFg&s",
    },
    {
      id: 3,
      short_description: "lorem ipsum",
      name: "Loose",
      image:
        "https://ae01.alicdn.com/kf/H5a7ed551f7254cbfbceee2264ac81fb7J/Lot-of-5-Star-Wars-Republic-Plain-White-Clone-Trooper-3-75-Loose-Action-Figure.jpg",
    },
    {
      id: 4,
      short_description: "lorem ipsum",
      name: "Carded",
      image:
        "https://www.vintagestarwarscollectables.co.uk/images/Star%20Wars/logos/MOCvintage.jpg",
    },
    {
      id: 5,
      short_description: "lorem ipsum",
      name: "Boxed",
      image:
        "https://hellosubscription.com/wp-content/uploads/2024/01/image_6596638c3f5be.png?quality=90&strip=all",
    },
  ];

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //     *[_type == "featured" && _id == $id]{
  //       ...,
  //       restaurants[]->{
  //         ...,
  //         dishes[]->,
  //         type->{
  //           name
  //         }
  //       }
  //     }[0]`,
  //       { id }
  //     )
  //     .then((data) => {
  //       setRestaurant(data?.restaurants);
  //     });
  // }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"black"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        {products.map((item, key) => {
          return (
            <RestaurantCard
              id={item._id}
              imgUrl={item.image}
              title={item.name}
              rating={item.rating}
              genre={item.genre}
              address={item.address}
              short_description={item.short_description}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
              key={key}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
