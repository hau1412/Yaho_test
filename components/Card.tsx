import React from "react";
import { View, Text, Image } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { useTranslation } from "react-i18next";

interface AgeGroup {
  title: string;
  minAge: number;
  maxAge: number;
}

interface InfoCardProps {
  iconSource: any;
  headerIcon: any;
  title: string;
  subtitle: string;
  ageGroups: AgeGroup[];
  children?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  iconSource,
  headerIcon,
  title,
  subtitle,
  ageGroups,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <VStack className="bg-white mb-4 mr-6 rounded-tr-2xl rounded-br-lg relative mt-[25px]">
      <Image source={iconSource} className="w-12 h-12 absolute right-0 top-0" />
      <VStack className="px-6 py-4">
        <HStack className="items-center mb-1">
          <Image source={headerIcon} className="w-2.5 h-3.5 resize-cover" />
          <Text className="text-[13px] font-bold ml-1 text-black">{t(title)}</Text>
        </HStack>
        <Text className="text-lg font-bold text-gray-800 tracking-wide ">
          {t(subtitle)}
        </Text>
      </VStack>
      <HStack className="mb-2 gap-3 ml-6 ">
        {ageGroups.map((group, index) => (
          <React.Fragment key={index}>
            <VStack className="items-start">
              <Text className="text-xs font-semibold text-gray-800">
                {t(group.title)}
              </Text>
              <Text className="text-xs text-gray-500">
                {`${group.minAge}-${group.maxAge} ${t("years_old")}`}
              </Text>
            </VStack>
            {index < ageGroups.length - 1 && (
              <VStack className="w-[1px] h-[90%] bg-[#ECF4FC] mx-4" />
            )}
          </React.Fragment>
        ))}
      </HStack>
      {children && <View className="p-2">{children}</View>}
    </VStack>
  );
};
export default InfoCard;