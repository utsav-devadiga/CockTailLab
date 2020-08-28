import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
  Animated,
  FlatList,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { data } = this.props.route.params;
    global.img = data.strDrinkThumb;
  }

  render() {
    const { data } = this.props.route.params;

    var size = 33;
    if (Platform.OS == "ios") {
      size = 30;
    } else {
      size = 33;
    }

    var Linksdata = [
      data.strIngredient1,
      data.strIngredient2,
      data.strIngredient3,
      data.strIngredient4,
      data.strIngredient5,
      data.strIngredient6,
      data.strIngredient7,
      data.strIngredient8,
      data.strIngredient9,
      data.strIngredient10,
      data.strIngredient11,
      data.strIngredient12,
      data.strIngredient13,
      data.strIngredient14,
      data.strIngredient15,
    ];

    function filterByNull(obj) {
      if (obj != null) {
        return true;
      } else {
        return false;
      }
    }

    var datawithnonull = Linksdata.filter(filterByNull);
    console.log(datawithnonull.length);

    


    return (
      <ScrollView style={styles.scrollme}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <SharedElement id={`item.${data.idDrink}.photo`}>
              <Image style={styles.drinkimage} source={{ uri: img }} />
            </SharedElement>
            <View style={styles.headerText}>
              <SharedElement id={`item.${data.strDrink}.text`}>
                <Text style={styles.textview}>{data.strDrink}</Text>
              </SharedElement>
            </View>
          </View>

          <Animatable.View
            animation="fadeInUpBig"
            duration={680}
            style={styles.Instructions}
          >
            <Text style={styles.tips}>Tip : </Text>
            <Text style={styles.instructionText}>{data.strInstructions}</Text>
            <Text style={styles.ingredientscss}>Ingredients :</Text>
            <View style={{ alignItems: "center" }}>
              <FlatList
                data={datawithnonull}
                keyExtractor={(data, index) => index}
                renderItem={({ item }) => (
                  <View style={{alignItems: 'center',marginBottom:15 }} >
                    <Text style={styles.ingredientitems}>{item}</Text>
                    <Image
                      style={{ height: 160, width: 160, resizeMode: "contain" }}
                      source={{
                        uri:
                          "https://www.thecocktaildb.com/images/ingredients/" +
                          item +
                          ".png",
                      }}
                    />
                    
                  </View>
                )}
                numColumns={2}
              />
            </View>
          </Animatable.View>
          <View style={styles.backarrow}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrowleft" color="white" size={size} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
  },
  drinkimage: {
    resizeMode: "cover",
    backgroundColor: "white",
    height: Dimensions.get("window").height - 390,
    width: "100%",
  },
  backarrow: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  textview: {
    color: "white",
    fontSize: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  imageView: {
    backgroundColor: "white",
  },
  headerText: {
    position: "absolute",
    bottom: 25,
    left: 10,
  },
  Instructions: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    backgroundColor: "white",
    bottom: 18,
  },
  instructionText: {
    left: 12,
    marginHorizontal: 12,
    fontSize: 18,
    marginVertical: 12,
  },
  scrollme: {
    flex: 1,
    backgroundColor: "white",
  },
  tips: {
    top: 10,
    left: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredientscss: {
    top: 0,
    marginBottom:10,
    left: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredientitems: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
 
});
