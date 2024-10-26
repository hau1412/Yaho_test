// Body.js
import React from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import KidsList from "./body/KidsList";
import Voucher from "./body/Voucher";
import CardList from "./body/CardList";
import LearningSection from "./body/LearningSection";

const Body = () => {
  return (
    <VStack className="bg-[#ECF4FC] mt-6 rounded-t-[20px]">
      <KidsList />
      <Voucher />
      <CardList />
      <LearningSection />
    </VStack>
  );
};

export default Body;
