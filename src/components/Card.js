import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Card() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "120 Big Cat Coin",
      price: 10000,
      sold: 100,
      image: "https://roexplorer.com/imgs/item_151.jpg",
      isLiked: "false",
    },
    {
      id: "2",
      name: "10M Zeny Pack",
      price: 300000,
      sold: 80,
      image: "https://roexplorer.com/imgs/item_100.jpg",
      isLiked: "false",
    },
    {
      id: "3",
      name: "600K Steam Wallet",
      price: 20000,
      sold: 30,
      image:
        "https://irvanstore.com/image/cache/data/catalog/steam%20wallet/valve-steam-wallet-id-600000-digital-code-1473939291-4130959-d65075b229ad7c14cb7466c9abd29fe5-product-800x800.jpg",
      isLiked: "false",
    },
    {
      id: "4",
      name: "2013 UC PUBG",
      price: 315000,
      sold: 30,
      image: "https://s1.bukalapak.com/img/69923950102/large/data.jpeg",
      isLiked: "false",
    },
    {
      id: "5",
      name: "175K Lyto Voucher",
      price: 168500,
      sold: 30,
      image: "https://cf.shopee.co.id/file/b96299589c7b1a6fd008df35c21ffa07",
      isLiked: "false",
    },
    {
      id: "6",
      name: "1K Apex Coin",
      price: 220000,
      sold: 30,
      image:
        "https://cdn-products.eneba.com/resized-products/HJ6-Ec6Utzz_ABNvQj8qqispMtMAjFtvbiPl1xeL1FA_350x200_1x-0.jpeg",
      isLiked: "false",
    },
    {
      id: "7",
      name: "6480 CODM CP",
      price: 705000,
      sold: 30,
      image:
        "https://preview.redd.it/tmphr4j40d451.png?width=503&format=png&auto=webp&s=eba7ce9f0b9597b13e22159aab9cf27b79595638",
      isLiked: "false",
    },
    {
      id: "8",
      name: "10K Ayodance Micash",
      price: 12000,
      sold: 30,
      image: "https://cf.shopee.co.id/file/8fd86afc059df3dd74cdc7da927fd484",
      isLiked: "false",
    },
    {
      id: "9",
      name: "4.020 Mobile Legends Diamond",
      price: 850000,
      sold: 30,
      image: "https://cf.shopee.co.id/file/5d74494818f4739aed4b611f37fa8270",
      isLiked: "false",
    },
  ]);
  const [liked, setLiked] = useState("true");
  const [color, setColor] = useState("#808080");
  const changeColor = (id) => {
    if (color == "#808080") {
      setColor("red");
    } else {
      setColor("#808080");
    }
  };
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity>
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: `${item.image}` }}
              style={styles.image}
            ></Image>
            <View style={styles.descriptionContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity onPress={() => changeColor(item.id)}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginTop: 5,
                      tintColor: `${color}`,
                    }}
                    source={{ uri: "https://i.imgur.com/HamkYO6.png" }}
                  ></Image>
                </TouchableOpacity>
              </View>
              <Text style={styles.price}>Rp {item.price}</Text>
              <Text>{item.sold}++ Produk Terjual</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
  },
  descriptionContainer: {
    flexDirection: "column",
  },
  card: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
    flexDirection: "row",
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontWeight: "800",
    fontSize: 18,
  },
  price: {
    color: "#EF6000",
    fontWeight: "bold",
    fontSize: 18,
  },
  iconContainer: {
    fontSize: 18,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 180,
  },
  image: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 5,
  },
});
