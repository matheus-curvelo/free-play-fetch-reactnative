import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Linking,
} from "react-native";
import emailjs from "emailjs-com";
import Ionicons from "@expo/vector-icons/Ionicons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function ContactScreen() {
  const colorScheme = useColorScheme() || "light";
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (name: string, value: string) =>
    setFormData({...formData, [name]: value});

  const handleSubmit = () => {
    setIsSending(true);
    setStatusMessage("");

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
        () => {
          setIsSending(false);
          setStatusMessage("Mensagem enviada com sucesso!");
          setFormData({name: "", email: "", message: ""});
        },
        () => {
          setIsSending(false);
          setStatusMessage("Erro ao enviar mensagem.");
        }
      );
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(console.error);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: "#475569", dark: "#475569"}}
      headerImage={
        <Ionicons
          size={310}
          name="mail-outline"
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

      {statusMessage ? (
        <Text
          style={
            statusMessage.includes("sucesso")
              ? styles(colorScheme).successMessage
              : styles(colorScheme).errorMessage
          }>
          {statusMessage}
        </Text>
      ) : null}

      <View style={styles(colorScheme).socialContainer}>
        <Text style={styles(colorScheme).socialTitle}>Redes Sociais</Text>
        <View style={styles(colorScheme).socialLinks}>
          <TouchableOpacity
            onPress={() => openLink("https://github.com/matheus-curvelo")}
            activeOpacity={0.5}>
            <FontAwesomeIcon
              icon={faGithub}
              size={40}
              style={styles(colorScheme).socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openLink("https://www.linkedin.com/in/matheus-curvelo/")
            }
            activeOpacity={0.5}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size={40}
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
    titleContainer: {
      flexDirection: "row",
      gap: 8,
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
      marginTop: 10,
      padding: 5,
      color: colorScheme === "dark" ? "#FFFFFF" : "#000000",
    },
    headerImage: {
      color: "#ffffff",
      bottom: -90,
      left: -35,
      position: "absolute",
    },
  });
