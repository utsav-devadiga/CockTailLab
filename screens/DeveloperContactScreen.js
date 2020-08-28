import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import LottieView from "lottie-react-native";

export default class DeveloperContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.Main}>
        <View
          style={{
            height: 100,
            width: 374,
            borderBottomLeftRadius: 38,
            borderBottomRightRadius: 38,
            backgroundColor: "#FC5404",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginTop: 40,
            }}
          >
            Cocktail²ab
          </Text>
        </View>
        <Image
          style={{ height: 200, width: 200 }}
          source={require("../assets/splash.png")}
        />

        <View style={styles.card}>
          <AirbnbRating count={5} defaultRating={0} size={30} />
        </View>
        <Text style={{ fontWeight: "bold", alignSelf: "center", marginTop: 18 }}> Rate me!</Text>
        <Text style={{ fontWeight: "bold", alignSelf: "center", marginTop: 3 }}> & </Text>
        <Text
          style={{ fontWeight: "bold", alignSelf: "center", marginTop: 3 }}
        >
          Drink Responsibly
        </Text>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
            this.animation.play();
          }}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#fff",
          }}
          source={require("../assets/sip.json")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Main: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 100,
    borderRadius: 5,
    width: 200,
    backgroundColor: "white",
    elevation: 5,
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
