import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ShoppingCart } from "lucide-react-native";


import React from "react";
import { useTranslation } from "react-i18next";
import { View, Image, TouchableOpacity } from "react-native";

const Header = () => {
  const { t } = useTranslation();
  return (
    <View className="flex-row justify-between items-center px-5 py-2 bg-white">
      <HStack className="space-x-3 flex-row">
        <Center className="w-10 h-10 justify-center items-center border-2 border-gray-400 rounded-full mr-1.5">
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/7734/c376/625243fbe31741133edd43c6bfbaca7a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EANjCRkzPXPae1nU3xR3qy2WmCZrbL63nTgF6MPkwN-BzNk4zOiXp4mjvCTnIcSXy1hDFkCQYJdreUe7t-iArqgL-X1mtnCV~Qf26-KG5jSh53TxW7jfbtq5RK2sZ9HI2Ut6YAplM6aTZcDcyWy6z8CdbVBKMS-SrsfzmrDlWoYWgartSI1gfjtUscm0wPbQ2rAiT6-1iIz1cFd6cHFQwhJ6RWcVmn5~gTpA-Xnb7zlVR9KJnJT2iWbbNh3PziiVYPl4-2v1Kz28FLncuL2FIzCuOucx7ZvK54pUV6wPaMnRAOSfJRcLV7QpgWiDnXk~HdJdQcDJ5RQnj0dFuXqJUQ__",
            }}
            className="w-8 h-8 rounded-full"
          />
        </Center>
        <VStack>
          <Text className="text-xs tracking-tight font-semibold text-gray-500 text-left">
            {t('home.welcome')} 👋
          </Text>
          <Text className="text-lg font-bold text-black-500">Hye Soo</Text>
        </VStack>
      </HStack>

      <TouchableOpacity className="p-2">
        <ShoppingCart color="black" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
