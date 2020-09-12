import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;

export default function SliderCategory() {
  const [items, setItems] = useState([
    "Mobile Legends",
    "Free Fire",
    "Voucher Lyto",
    "Voucher Garena",
  ]);
  return (
    <View style={styles.container}>
      <ScrollView pagingEnabled horizontal>
        {items.map((item, index) => (
          <Text style={styles.font} key={index}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width, position: "absolute", marginTop: 280 },
  font: {
    fontSize: height / 40,
    marginVertical: 15,
    marginHorizontal: 12,
    color: "#121212",
  },
});
