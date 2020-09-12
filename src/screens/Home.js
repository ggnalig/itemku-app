import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Carousel from "../components/Carousel";
import SliderCategory from "../components/SliderCategory";
import Card from "../components/Card";

export default function Home() {
  return (
    <View>
      <Header style={{ zIndex: 0 }} />
      <Carousel style={{ zIndex: 1000 }} />
      <SliderCategory />
      <Card />
    </View>
  );
}
const styles = StyleSheet.create({});
