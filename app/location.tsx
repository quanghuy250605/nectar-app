import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../src/theme";
import { AppInput, PrimaryButton, Screen } from "../src/ui";

export default function LocationScreen() {
  const router = useRouter();
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("Types of your area");

  return (
    <Screen>
      <Text style={styles.map}>📍🗺️</Text>

      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.sub}>
        Switch on your location to stay in tune with{"\n"}what’s happening in
        your area
      </Text>

      <View style={{ height: 32 }} />

      <AppInput label="Your Zone" value={zone} onChangeText={setZone} />
      <AppInput label="Your Area" value={area} onChangeText={setArea} />

      <PrimaryButton
        title="Submit"
        onPress={() => router.replace("/(tabs)/shop")}
        style={{ marginTop: 28 }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  map: {
    textAlign: "center",
    fontSize: 90,
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 30,
    fontWeight: "800",
    color: colors.text,
  },
  sub: {
    textAlign: "center",
    marginTop: 12,
    color: colors.muted,
    lineHeight: 22,
    fontSize: 15,
  },
});
