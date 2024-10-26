import React from "react";
import { Image, View } from "react-native";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { AlarmClock } from "lucide-react-native";
import { ImageSourcePropType } from "react-native";
import { useTranslation } from "react-i18next";

type LearningItem = {
  id: string;
  image: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    unit: string;
  };
  duration: {
    time: number;
    unit: string;
  };
};
interface SectionItemProps {
  item: LearningItem;
}

const SectionItem: React.FC<SectionItemProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <VStack className="bg-white rounded-lg mr-4">
      <Image
        source={{ uri: item.image } as ImageSourcePropType}
        className="w-full h-24 mb-2.5 rounded-t-lg"
      />
      <VStack className="p-4">
        <Text className="text-sm font-semibold tracking-tight text-gray-800 w-48">
          {t(item.description)}
        </Text>
        <Text className="text-sm font-semibold tracking-tight text-red-600 mt-2">
          {item.price.amount.toLocaleString()}
          {item.price.currency} {`/ `}
          {t("course.learning_sessions.price_unit")}
        </Text>
        <View className="bg-gray-200 w-full h-px my-2.5" />
        <HStack className="items-center">
          <AlarmClock size={14} color="gray" />
          <Text className="text-xs tracking-tight text-gray-500 ml-1">
            {/* {t("Duration")}: {item.duration.time} {t(item.duration.unit)}
             */}
            {t("course.learning_sessions.duration")}: {item.duration.time}{" "}
            {t(item.duration.unit)}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SectionItem;
