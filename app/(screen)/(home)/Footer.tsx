import React from "react";
import { Image, FlatList, ListRenderItem } from "react-native";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { FooterData } from "@/data/data";
import { footer } from "@/data";

interface FooterItem {
  id: string;
  title: string;
  backgroundColor: string;
  icon: any;
}

const Footer: React.FC = () => {
  const renderFooterItem: ListRenderItem<FooterItem> = ({ item }) => (
    <VStack
      className="w-[120px] h-[120px] rounded-lg items-center mr-4"
      style={{ backgroundColor: item.backgroundColor }}
    >
      <Text className="text-white font-semibold text-left mt-2 ml-2 mr-4">
        {item.title}
      </Text>
      <Image source={item.icon} className="w-[45px] h-[45px] absolute right-2 bottom-2" />
    </VStack>
  );

  return (
    <VStack className="bg-white mx-5">
      <Text className="text-black text-[16px] font-bold text-left mb-3">
        📰 Find out more
      </Text>
      <FlatList
        data={footer}
        renderItem={renderFooterItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
};

export default Footer;
