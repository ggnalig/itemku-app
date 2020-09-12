import React, { useState } from "react";
import { View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;

export default function Carousel() {
  const [items, setItems] = useState([
    "https://www.talkesport.com/wp-content/uploads/csgo-breaks-record-for-highest-player-count-all-time.jpg",
    "https://image-cdn.essentiallysports.com/wp-content/uploads/20200906005821/apex-legends-1.jpg",
    "https://media.hitekno.com/thumbs/2019/07/24/28001-rf-online-indonesia/730x480-img-28001-rf-online-indonesia.jpg",
    "https://cdn1-production-images-kly.akamaized.net/MbYPdlAMmr-0nSAXTRXM82ciYy4=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/763631/original/054594400_1415596531-utama.jpg",
  ]);
  return (
    <View style={styles.container}>
      <ScrollView pagingEnabled horizontal>
        {items.map((item, idx) => (
          <TouchableOpacity>
            <Image
              key={idx}
              style={styles.card}
              source={{ uri: `${item}` }}
            ></Image>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    position: "absolute",
    marginTop: 120,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    width: 280,
    height: 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 100,
  },
});
