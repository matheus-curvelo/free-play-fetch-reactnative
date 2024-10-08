import {Tabs} from "expo-router";
import React from "react";

import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? "game-controller" : "game-controller-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? "document-text" : "document-text-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contato",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? "mail" : "mail-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
