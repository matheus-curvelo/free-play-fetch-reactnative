import React from "react";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function AboutScreen() {
  const colorScheme = useColorScheme() || "light";

  const openLink = (url: string) => {
    Linking.openURL(url).catch(console.error);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: "#475569", dark: "#475569"}}
      headerImage={
        <Ionicons
          size={310}
          name="document-text-outline"
          style={styles(colorScheme).headerImage}
        />
      }>
      <ThemedView style={styles(colorScheme).titleContainer}>
        <ThemedText type="title">Sobre</ThemedText>
      </ThemedView>

      <ScrollView contentContainerStyle={styles(colorScheme).scrollViewContent}>
        <Text style={styles(colorScheme).description}>
          Este projeto foi criado com o objetivo de oferecer aos usuários uma
          plataforma centralizada para descobrir jogos e DLC's gratuitos para PC
          disponíveis na web.
        </Text>

        <Text style={styles(colorScheme).sectionTitle}>
          Ferramentas e Tecnologias
        </Text>
        <View style={styles(colorScheme).listContainer}>
          <Text style={styles(colorScheme).listItem}>
            <Text style={{fontWeight: "bold"}}>React Native + TypeScript</Text>{" "}
            para estruturação e tipagem do código
          </Text>
          <Text style={styles(colorScheme).listItem}>
            <Text style={{fontWeight: "bold"}}>Expo</Text> para facilitar o
            desenvolvimento e o build do aplicativo
          </Text>
          <Text style={styles(colorScheme).listItem}>
            <Text style={{fontWeight: "bold"}}>Tailwind React Native</Text> para
            estilos utilitários e design responsivo rápido
          </Text>
          <Text style={styles(colorScheme).listItem}>
            <Text style={{fontWeight: "bold"}}>FortAwesome</Text> para uso de
            ícones no aplicativo
          </Text>
          <Text style={styles(colorScheme).listItem}>
            <Text style={{fontWeight: "bold"}}>EmailJS</Text> para envio de
            formulários de contato diretamente do aplicativo
          </Text>
          <Text style={styles(colorScheme).listItem}>
            <Text style={{fontWeight: "bold"}}>Fetch API</Text> para integração
            e obtenção de dados dinâmicos
          </Text>
        </View>

        <Text style={styles(colorScheme).sectionTitle}>Fonte de Dados</Text>
        <Text style={styles(colorScheme).description}>
          As APIs utilizadas neste projeto foram obtidas dos sites{" "}
          <Text
            style={styles(colorScheme).link}
            onPress={() => openLink("https://www.gamerpower.com/")}>
            GamerPower
          </Text>{" "}
          e {""}
          <Text
            style={styles(colorScheme).link}
            onPress={() => openLink("https://www.freetogame.com/")}>
            Free To Game
          </Text>
          , plataformas que agregam informações sobre jogos gratuitos e
          promoções disponíveis em diversas lojas online.
        </Text>

        <Text style={styles(colorScheme).sectionTitle}>
          Desafios Enfrentados
        </Text>
        <Text style={styles(colorScheme).description}>
          Durante o desenvolvimento deste projeto, alguns dos principais
          desafios incluíram a integração com a API, a garantia de
          responsividade em diferentes dispositivos e a implementação de um
          sistema de roteamento eficiente. Além disso, a estilização
          personalizada com SASS exigiu um cuidado especial para manter a
          consistência visual em toda a aplicação. Nesta ocasião, foi a primeira
          vez que utilizei o Tailwind CSS, o que trouxe novas perspectivas e
          práticas para o processo de desenvolvimento.
        </Text>

        <Text style={styles(colorScheme).sectionTitle}>
          Contribua com o Projeto
        </Text>
        <Text style={styles(colorScheme).description}>
          Se você gostou deste projeto e gostaria de contribuir com melhorias,
          sinta-se à vontade para visitar o repositório no GitHub e fazer uma
          pull request ou reportar issues. Toda contribuição é bem-vinda!
        </Text>

        <TouchableOpacity
          onPress={() =>
            openLink(
              "https://github.com/matheus-curvelo/free-play-fetch-reactnative"
            )
          }
          style={styles(colorScheme).button}>
          <Text style={styles(colorScheme).buttonText}>
            Contribua no GitHub
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = (colorScheme: string) =>
  StyleSheet.create({
    scrollViewContent: {
      // padding: 16,
    },
    titleContainer: {
      flexDirection: "row",
      gap: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
      color: colorScheme === "dark" ? "#C0C0C0" : "#4A4A4A",
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 10,
      color: colorScheme === "dark" ? "#FFFFFF" : "#000000",
    },
    listContainer: {
      marginBottom: 20,
    },
    listItem: {
      fontSize: 16,
      marginBottom: 8,
      color: colorScheme === "dark" ? "#C0C0C0" : "#4A4A4A",
    },
    link: {
      color: "#1E90FF",
      textDecorationLine: "underline",
    },
    button: {
      backgroundColor: "#007bff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: "center",
      marginTop: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    headerImage: {
      color: "#ffffff",
      bottom: -90,
      left: -35,
      position: "absolute",
    },
  });
