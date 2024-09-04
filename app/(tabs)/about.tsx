import Ionicons from "@expo/vector-icons/Ionicons";
import {StyleSheet} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: "#475569", dark: "#475569"}}
      headerImage={
        <Ionicons size={310} name="document-text-outline" style={styles.headerImage} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#ffffff",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
