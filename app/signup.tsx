import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text } from "react-native";
import { colors } from "../src/theme";
import { AppInput, PrimaryButton, Screen } from "../src/ui";

export default function SignupScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("Afsar Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");

  return (
    <Screen>
      <Text style={{ fontSize: 48, textAlign: "center", marginTop: 16 }}>
        🥕
      </Text>

      <Text
        style={{
          fontSize: 38,
          fontWeight: "800",
          color: colors.text,
          marginTop: 54,
        }}
      >
        Sign Up
      </Text>
      <Text
        style={{
          color: colors.muted,
          fontSize: 16,
          marginTop: 10,
          marginBottom: 34,
        }}
      >
        Enter your credentials to continue
      </Text>

      <AppInput label="Username" value={username} onChangeText={setUsername} />
      <AppInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        right={<Ionicons name="checkmark" size={22} color={colors.primary} />}
      />
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
          color: colors.muted,
          lineHeight: 22,
          marginTop: -4,
          marginBottom: 28,
        }}
      >
        By continuing you agree to our{" "}
        <Text style={{ color: colors.primary }}>Terms of Service</Text> and{" "}
        <Text style={{ color: colors.primary }}>Privacy Policy</Text>.
      </Text>

      {/* Sau khi signup xong thì đi chọn location */}
      <PrimaryButton
        title="Sign Up"
        onPress={() => router.replace("/location")}
      />

      <Text style={{ textAlign: "center", marginTop: 22, color: colors.text }}>
        Already have an account?{" "}
        <Text
          style={{ color: colors.primary }}
          onPress={() => router.push("/login")}
        >
          Login
        </Text>
      </Text>
    </Screen>
  );
}
