import React, { Component } from "react";
import { View, Text, Dimensions,StyleSheet } from "react-native";
import Shimmer from "./Shimmer";

export default class HomeScreenLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.firstLine}>
          <Shimmer height={12} width={250} />
        </View>
        <View style={styles.secondLine}>
          <Shimmer height={8} width={125} />
        </View>
        <View style={styles.imagecard}>
          <Shimmer
            height={Dimensions.get("window").height / 4.5}
            width={Dimensions.get("window").width - 55}
          />
        </View>
        <View style={styles.cattext}>
          <Shimmer height={12} width={230} />
        </View>
        <View style={styles.catcard}>
          <Shimmer height={120} width={180} />
          <View style={styles.gap}></View>
          <Shimmer height={120} width={180} />
        </View>
        <View style={styles.catcard}>
          <Shimmer height={120} width={180} />
          <View style={styles.gap}></View>
          <Shimmer height={120} width={180} />
        </View>
        <View style={styles.catcard}>
          <Shimmer height={120} width={180} />
          <View style={styles.gap}></View>
          <Shimmer height={120} width={180} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  firstLine: {
   left:12,
   marginTop:25
  },
  secondLine: {
    left: 12,
    marginTop: 25,
  },
  imagecard: {
    left: 15,
    marginTop: 18,
  },
  cattext: {
    left: 12,
    marginTop: 25,
  },
  catcard: {
    left: 12,
    marginTop: 20,
    flexDirection: "row",
  },
  gap:{ width: 20 }
});
