import React from "react";
import { FlatList } from "react-native";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import SectionItem from "@/components/SectionItem";
import { artLearningItems, vrLearningItems } from "@/data";
import { useTranslation } from "react-i18next";

interface LearningListProps {
  title: string;
  data: LearningItem[];
}
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

interface LearningListProps {
  title: string;
  data: LearningItem[];
}


const LearningList: React.FC<LearningListProps> = ({ title, data }) => {
  const { t } = useTranslation();

  return (
    <VStack className="my-2.5 px-5">
      <Text className="text-lg font-semibold tracking-tight text-black text-left">
        {t(title)}
      </Text>
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SectionItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
};

const LearningSection: React.FC = () => (
  <>
    <LearningList title="🐳 Learning VR technology" data={vrLearningItems} />
    <LearningList title="🚀 Learning Art and craft skills" data={artLearningItems} />
  </>
);

export default LearningSection;
