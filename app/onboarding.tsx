import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../src/ui";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      }}
      style={styles.bg}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>🥕</Text>
        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
        <Text style={styles.subtitle}>
          Ger your groceries in as fast as one hour
        </Text>

        <PrimaryButton
          title="Get Started"
          onPress={() => router.push("/sign-in")}
          style={{ marginTop: 40 }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "flex-end" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 80,
  },
  logo: {
    textAlign: "center",
    fontSize: 42,
    color: "#fff",
    marginBottom: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 42,
    lineHeight: 50,
    fontWeight: "800",
    color: "#fff",
  },
  subtitle: {
    textAlign: "center",
    marginTop: 12,
    color: "#FCFCFC",
    fontSize: 16,
  },
});
