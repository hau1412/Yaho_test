import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const tabScreens = [
  { key: "index", name: "index", title: "Tudy", iconName: "Home" },
  { key: "schedule", name: "schedule", title: "Schedule", iconName: "History" },
  {
    key: "message",
    name: "message",
    title: "Message",
    iconName: "MessageSquareMore",
  },
  { key: "profile", name: "profile", title: "Profile", iconName: "Circle" },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeTintColor = Colors[colorScheme ?? "light"].tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTintColor,
        headerShown: false,
      }}
    >
      {tabScreens.map(({ key, name, title, iconName }) => (
        <Tabs.Screen
          key={key}
          name={name}
          options={{
            title, // This provides the label text for each tab
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={iconName} color={color} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
