import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://i.imgur.com/pcGKcWV.png",
          }}
        ></Image>
        <View style={styles.leftIcon}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://i.imgur.com/PB9Xkme.png",
            }}
          ></Image>
          <Image
            style={styles.icon}
            source={{
              uri: "https://i.imgur.com/VRpqCFE.png",
            }}
          ></Image>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 200,
    width: width,
    backgroundColor: "#007AFF",
    borderBottomLeftRadius: 50,
    zIndex: 0,
  },
  iconContainer: { flexDirection: "row", justifyContent: "space-between" },
  leftIcon: { flexDirection: "row", justifyContent: "space-between" },
  logo: {
    marginVertical: 20,
    marginHorizontal: 10,
    width: 150,
    height: 50,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
    marginVertical: 32,
  },
});
