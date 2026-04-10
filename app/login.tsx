import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../src/theme";
import { AppInput, AppTitle, PrimaryButton, Screen } from "../src/ui";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");

  return (
    <Screen>
      <Text style={{ fontSize: 48, textAlign: "center", marginTop: 16 }}>
        🥕
      </Text>

      <View style={{ marginTop: 60 }}>
        <AppTitle title="Log In" subtitle="Enter your emails and password" />

        <AppInput label="Email" value={email} onChangeText={setEmail} />
        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          right={
            <Ionicons name="eye-off-outline" size={22} color={colors.muted} />
          }
        />

        <Text
          style={{
            textAlign: "right",
            color: colors.text,
            marginTop: -8,
            marginBottom: 30,
          }}
        >
          Forgot Password?
        </Text>

        <PrimaryButton
          title="Log In"
          onPress={() => router.replace("/(tabs)/shop")}
        />

        <Text
          style={{ textAlign: "center", marginTop: 24, color: colors.text }}
        >
          Don’t have an account?{" "}
          <Text
            style={{ color: colors.primary }}
            onPress={() => router.push("/signup")}
          >
            Signup
          </Text>
        </Text>
      </View>
    </Screen>
  );
}
