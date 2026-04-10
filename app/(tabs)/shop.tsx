import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    ImageBackground,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { products } from "../../src/data";
import { colors } from "../../src/theme";
import { ProductCard, Screen } from "../../src/ui";

export default function ShopScreen() {
  const router = useRouter();
  const exclusive = products.slice(0, 2);

  return (
    <Screen>
      <Text style={{ textAlign: "center", fontSize: 36, marginTop: 10 }}>
        🥕
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 8,
          color: colors.text,
          fontWeight: "600",
        }}
      >
        📍 Dhaka, Banasree
      </Text>

      <Pressable
        onPress={() => {}}
        style={{
          height: 52,
          borderRadius: 15,
          backgroundColor: colors.card,
          marginTop: 18,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="search" size={18} color="#666" />
        <TextInput
          editable={false}
          placeholder="Search Store"
          style={{ marginLeft: 10, flex: 1 }}
          placeholderTextColor="#666"
        />
      </Pressable>

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop",
        }}
        style={{
          height: 120,
          borderRadius: 18,
          overflow: "hidden",
          marginTop: 20,
          justifyContent: "center",
          paddingHorizontal: 18,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.75)",
            width: 200,
            borderRadius: 14,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "800", color: colors.text }}>
            Fresh Vegetables
          </Text>
          <Text style={{ color: colors.primary, marginTop: 4 }}>
            Get Up To 40% OFF
          </Text>
        </View>
      </ImageBackground>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: colors.text,
          marginTop: 24,
          marginBottom: 16,
        }}
      >
        Exclusive Offer
      </Text>

      <FlatList
        horizontal
        data={exclusive}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </Screen>
  );
}
