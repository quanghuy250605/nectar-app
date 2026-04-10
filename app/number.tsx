import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { colors } from "../src/theme";
import { AppInput, AppTitle, CircleButton, Screen } from "../src/ui";

export default function NumberScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("+880");

  return (
    <Screen>
      <Pressable onPress={() => router.back()} style={{ marginBottom: 24 }}>
        <Ionicons name="chevron-back" size={28} color={colors.text} />
      </Pressable>

      <AppTitle title="Enter your mobile number" />

      <AppInput
        label="Mobile Number"
        value={phone}
        onChangeText={setPhone}
        left={
          <View>
            <Ionicons name="call" size={20} color={colors.primary} />
          </View>
        }
      />

      <View style={{ height: 280 }} />
      <CircleButton onPress={() => router.push("/verification")} />
    </Screen>
  );
}
