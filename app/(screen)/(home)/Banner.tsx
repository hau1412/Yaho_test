import { banners } from "@/data";
import React from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width: windowWidth } = Dimensions.get("window");

const Banner: React.FC = () => {
  return (
    <View className="bg-white">
      <Carousel
        loop
        width={windowWidth}
        height={160}
        autoPlay={false}
        data={banners}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.85, 
          parallaxScrollingOffset: 70, 
        }}
        renderItem={({ item }) => (
          <View className="rounded-lg overflow-hidden justify-center items-center">
            <Image source={{ uri: item.imageUrl }} className="w-full h-full object-cover" />
          </View>
        )}
      />
    </View>
  );
};

export default Banner;
