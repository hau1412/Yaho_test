import React from "react";

import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "../(screen)/(home)/Header";
import Banner from "../(screen)/(home)/Banner";
import Body from "../(screen)/(home)/Body";
import FavoritesList from "../(screen)/(home)/body/FavoritesList";
import Footer from "../(screen)/(home)/Footer";

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Banner />
          <Body />
          <FavoritesList />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
