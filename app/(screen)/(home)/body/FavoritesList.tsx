import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { ICONS } from "@/assets/images";
import { tutors } from "@/data";

interface Tutor {
  id: string;
  name: string;
  fullName: string;
  label: string;
  labelIcon: string;
  imageUrl: string;
}

const TutorItem: React.FC<{ tutor: Tutor }> = ({ tutor }) => (
  <VStack>
    <View className="flex items-center mr-4 bg-white rounded-lg p-4">
      <Image
        source={{ uri: tutor.imageUrl }}
        className="w-14 h-14 rounded-full mb-2"
      />
      <HStack className="flex-row items-center">
        <Text className="text-xs font-semibold text-gray-800">
          {tutor.name}
        </Text>
        <Image source={ICONS.icon_verified} className="w-2.5 h-2.5 ml-1" />
      </HStack>
      <Text className="text-xs text-gray-500 text-center overflow-hidden">
        {tutor.fullName}
      </Text>
    </View>
    <Text className="text-xs text-gray-500 mt-1 p-2 center">
      {tutor.label} {tutor.labelIcon}
    </Text>
  </VStack>
);

const FavoritesList: React.FC = () => (
  <View className="bg-gray-100 px-5 py-4 mt-6 mb-6">
    <Text className="text-lg font-semibold text-black mb-4">
      🧑‍🏫 Your favorites or previous tutors
    </Text>
    <FlatList
      data={tutors as Tutor[]}
      renderItem={({ item }) => <TutorItem tutor={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default FavoritesList;
