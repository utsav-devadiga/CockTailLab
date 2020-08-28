import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import TouchableScale from "react-native-touchable-scale";
import { punches_data } from "../../constants/PunchesData";

class Punches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.Main}>
        <FlatList
          style={{
            width: "100%",
          }}
          scrollEnabled={true}
          data={punches_data}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 8,
                alignContent: "center",
                justifyContent: "center",
                height: Dimensions.get("window").height - 390,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator />
              </View>
              <TouchableScale
                activeScale={0.95}
                tension={15}
                friction={7}
                useNativeDriver
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    data: item,
                  })
                }
              >
                <SharedElement id={`item.${item.idDrink}.photo`}>
                  <Image
                    style={styles.imagecard}
                    source={{ uri: item.strDrinkThumb }}
                  />
                </SharedElement>
                <SharedElement id={`item.${item.strDrink}.text`}>
                  <Text style={styles.textcard}>{item.strDrink}</Text>
                </SharedElement>
              </TouchableScale>
            </View>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Main: { flex: 1, alignItems: "center", justifyContent: "center" },
  imagecard: {
    resizeMode: "cover",
    borderRadius: 10,
    height: "100%",
    width: "100%",
  },
  textcard: {
    position: "absolute",
    bottom: 20,
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    marginLeft: 20,
    fontWeight: "bold",
    elevation: 5,
  },
});
export default Punches;
