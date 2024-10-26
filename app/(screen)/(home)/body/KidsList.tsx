import React from "react";
import { FlatList, View, ListRenderItem, TouchableOpacity, Image } from "react-native";
import { Text } from "@/components/ui/text";
import { CirclePlus } from "lucide-react-native";
import { kids } from "@/data";

type Kid = {
  id: string;
  name: string;
  fullName: string;
  image: string;
};

const KidsList: React.FC = () => {
  const kidsWithAddButton = [
    ...kids,
    { id: "add", image: '', name: '', fullName: '' },
  ];

  const renderKidItem: ListRenderItem<Kid> = ({ item }) => {
    if (item.id === "add") {
      return (
        <TouchableOpacity className="justify-center items-center bg-[#D3E8FF] rounded-full w-16 h-16 mr-2">
          <CirclePlus size={25} />
        </TouchableOpacity>
      );
    }
    return (
      <View className="flex-row items-center bg-[#D3E8FF] rounded-full mr-3 p-1">
        <Image source={{ uri: item.image }} className="w-14 h-14 rounded-full" />
        <View className="ml-1">
          <Text className="text-sm font-bold text-gray-800">{item.name}</Text>
          <Text className="text-xs text-gray-800">{item.fullName}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={kidsWithAddButton}
      renderItem={renderKidItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
    />
  );
};

export default KidsList;
