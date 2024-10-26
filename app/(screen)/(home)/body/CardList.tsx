import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import InfoCard from "@/components/Card";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { IMAGES } from "@/assets/images";
import { Text } from "@/components/ui/text";
import { cards } from "@/data/cards";
import { useTranslation } from "react-i18next";

const renderDiscountedProgram = (data) => (
  <HStack className="justify-between items-center bg-[#eff6ff] rounded-lg m-4 pr-11 pl-4 py-4 relative">
    <VStack className="absolute top-0 right-0 w-10 h-6 rounded-tr-lg rounded-bl-lg bg-blue-200 justify-center items-center">
      <Text className="text-xs font-bold text-[#e72410] tracking-tight">
        -5%
      </Text>
    </VStack>
    <Image
      source={IMAGES.image_eng}
      style={{ width: 110, resizeMode: "center", height: 36 }}
    />
    <VStack>
      <Text className="text-lg font-bold text-[#e72410] text-right">
        {data.discountedPrice}
      </Text>
      <Text className="text-sm text-gray-500 text-right">
        {data.originalPrice}
      </Text>
    </VStack>
  </HStack>
);

const renderCardComponent = (data) => {
  const { t } = useTranslation();
  return (
    <>
      {data.courses.map((course, index) => (
        <VStack
          key={index}
          className="bg-[#E6F5FF] rounded-lg p-4 my-2 w-11/12 self-center"
        >
          <HStack className="items-center mb-2">
            <HStack className="bg-[#0540f3] px-2 py-1 rounded-sm mr-2">
              <Text className="text-[#f2f9ff] text-xs font-bold text-center">
                {t("home.Free_talk")}
              </Text>
            </HStack>
            <Text className="text-lg text-[#00249c]" bold>
              {t(course.title)}
            </Text>
          </HStack>
          <Text className="text-[10px] text-[#1f2937] w-[204px]">
            {t(course.description)}
          </Text>
          <VStack className="absolute right-4 bottom-4 items-end">
            <Text className="text-[10px] font-[Averta] text-[#e72410]">
              {t("common.from")}
            </Text>
            <Text className="text-lg text-[#e72410] mt-[-2]" bold>
              {course.price}
            </Text>
          </VStack>
        </VStack>
      ))}
    </>
  );
};

const renderHomeworkAssistanceProgram = (data) => {
  const { t } = useTranslation();

  return (
  <>
    <HStack className="justify-between items-center bg-[#eff6ff] rounded-lg m-4 pr-11 pl-4 py-4 relative">
      <Text className="text-[12px] tracking-[-0.2px] font-semibold text-[#1f2937] text-left w-[222px]">
        {t(data.description)}
      </Text>
      <VStack className="items-end">
        <Text className="text-[10px] text-[#e72410]">{t("common.from")}</Text>
        <Text className="text-lg text-[#e72410] mt-[-2]" bold>
          {data.price}
        </Text>
      </VStack>
    </HStack></>
  );
};


const getChildrenComponent = (data) => {
  switch (data.componentType) {
    case "DiscountedProgram":
      return renderDiscountedProgram(data);
    case "CardComponent":
      return renderCardComponent(data);
    case "HomeworkAssistanceProgram":
      return renderHomeworkAssistanceProgram(data);
    default:
      return null;
  }
};

const CardList: React.FC = () => {
  const enrichedData = cards.map((program) => ({
    ...program,
    childrenComponent: getChildrenComponent(program),
  }));

  return (
    <ScrollView style={styles.container}>
      {enrichedData.map((program) => (
        <InfoCard
          key={program.id}
          iconSource={program.iconSource}
          headerIcon={program.headerIcon}
          title={program.title}
          subtitle={program.subtitle}
          ageGroups={program.ageGroups}
        >
          {program.childrenComponent}
        </InfoCard>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CardList;
