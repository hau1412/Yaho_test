
import React from "react";
import { Image, View } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { IMAGES } from "@/assets/images";
import { VStack } from "@/components/ui/vstack";
import { useTranslation } from "react-i18next";

const Voucher = () => {
  const {t} = useTranslation()
  return (
    <VStack className="p-6">
      <Text className="text-lg font-bold mb-2 text-black">🎁 {t('home.FreeProgramText')}</Text>
      <HStack className="flex-row justify-between gap-2">
        <HStack className="rounded-lg bg-[#fffaeb] border border-[#dbeafe] flex-1 w-full h-[90px]">
          <Image
            source={IMAGES.voucher1}
            className="w-full h-full rounded-lg object-cover"
          />
        </HStack>
        <HStack className="rounded-lg bg-[#fffaeb] border border-[#dbeafe] flex-1 w-full h-[90px]">
          <Image
            source={IMAGES.voucher2}
            className="w-full h-full rounded-lg object-cover"
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Voucher;
