import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  useColorScheme,
  Linking,
} from "react-native";
import emailjs from "emailjs-com";

import Ionicons from "@expo/vector-icons/Ionicons";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function ContactScreen() {
  const colorScheme = useColorScheme() || "light";

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error("Failed to open URL:", err)
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .send(
        "service_4jbxa25",
        "template_7dggke2",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "sKYtOpqTDPPSVEDH0"
      )
      .then(
        (result: any) => {
          setIsSending(false);
          setSuccessMessage("Mensagem enviada com sucesso!");
          setFormData({name: "", email: "", message: ""});
        },
        (error: any) => {
          setIsSending(false);
          setErrorMessage("Erro ao enviar mensagem.");
        }
      );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: "#475569", dark: "#475569"}}
      headerImage={
        <Ionicons
          size={310}
          name="code-slash"
          style={styles(colorScheme).headerImage}
        />
      }>
      <ThemedView style={styles(colorScheme).titleContainer}>
        <ThemedText type="title">Contato</ThemedText>
      </ThemedView>

      <Text style={styles(colorScheme).description}>
        Se você tiver alguma dúvida, sugestão ou apenas quiser entrar em
        contato, preencha o formulário abaixo:
      </Text>

      <View style={styles(colorScheme).inputContainer}>
        <Text style={styles(colorScheme).label}>Nome:</Text>
        <TextInput
          style={styles(colorScheme).input}
          value={formData.name}
          onChangeText={text => handleChange("name", text)}
          placeholder="Seu nome"
          placeholderTextColor={colorScheme === "dark" ? "#C0C0C0" : "#8A8A8A"}
        />
      </View>

      <View style={styles(colorScheme).inputContainer}>
        <Text style={styles(colorScheme).label}>Email:</Text>
        <TextInput
          style={styles(colorScheme).input}
          value={formData.email}
          onChangeText={text => handleChange("email", text)}
          placeholder="Seu email"
          keyboardType="email-address"
          placeholderTextColor={colorScheme === "dark" ? "#C0C0C0" : "#8A8A8A"}
        />
      </View>

      <View style={styles(colorScheme).inputContainer}>
        <Text style={styles(colorScheme).label}>Mensagem:</Text>
        <TextInput
          style={[styles(colorScheme).input, styles(colorScheme).textArea]}
          value={formData.message}
          onChangeText={text => handleChange("message", text)}
          placeholder="Sua mensagem"
          multiline
          numberOfLines={4}
          placeholderTextColor={colorScheme === "dark" ? "#C0C0C0" : "#8A8A8A"}
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={isSending}
        style={[
          styles(colorScheme).button,
          isSending && styles(colorScheme).buttonDisabled,
        ]}>
        <Text style={styles(colorScheme).buttonText}>
          {isSending ? "Enviando..." : "Enviar"}
        </Text>
      </TouchableOpacity>

      {successMessage ? (
        <Text style={styles(colorScheme).successMessage}>{successMessage}</Text>
      ) : null}
      {errorMessage ? (
        <Text style={styles(colorScheme).errorMessage}>{errorMessage}</Text>
      ) : null}

      <View style={styles(colorScheme).socialContainer}>
        <Text style={styles(colorScheme).socialTitle}>Redes Sociais</Text>
        <View style={styles(colorScheme).socialLinks}>
          <TouchableOpacity
            onPress={() => openLink("https://github.com/matheus-curvelo")}
            activeOpacity={0.8}>
            <Image
              source={require("../../assets/svgs/github.svg")}
              style={styles(colorScheme).socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink("https://www.linkedin.com/in/matheus-curvelo/")
            }
            activeOpacity={0.8}>
            <Image
              source={require("../../assets/svgs/linkedin.svg")}
              style={styles(colorScheme).socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = (colorScheme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F0F0F0",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      color: colorScheme === "dark" ? "#FFFFFF" : "#000000",
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
      color: colorScheme === "dark" ? "#C0C0C0" : "#4A4A4A",
    },
    inputContainer: {
      marginBottom: 12,
    },
    label: {
      fontSize: 14,
      marginBottom: 4,
      color: colorScheme === "dark" ? "#C0C0C0" : "#4A4A4A",
    },
    input: {
      borderWidth: 1,
      borderColor: colorScheme === "dark" ? "#444" : "#ccc",
      padding: 8,
      borderRadius: 4,
      backgroundColor: colorScheme === "dark" ? "#333" : "#FFF",
      color: colorScheme === "dark" ? "#FFF" : "#000",
    },
    textArea: {
      height: 100,
    },
    successMessage: {
      marginTop: 16,
      color: "green",
    },
    errorMessage: {
      marginTop: 16,
      color: "red",
    },
    socialContainer: {
      marginTop: 32,
      marginBottom: 32,
    },
    socialTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colorScheme === "dark" ? "#FFFFFF" : "#000000",
    },
    socialLinks: {
      flexDirection: "row",
      marginTop: 8,
      gap: 16,
    },
    socialIcon: {
      width: 40,
      height: 40,
      tintColor: colorScheme === "dark" ? "#FFFFFF" : "#000000",
    },
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

    button: {
      backgroundColor: "#007bff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonDisabled: {
      backgroundColor: "#aaa",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
