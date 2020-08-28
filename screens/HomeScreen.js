import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  Button,
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import TouchableScale from "react-native-touchable-scale";
import DrinksCard from "../components/DrinksCard";
import HomeScreenLoading from "../components/HomeScreenLoading";
import Shimmer from "../components/Shimmer";
import { datactr } from "../constants/Data";
import { SharedElement } from "react-navigation-shared-element";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      dataSource: [],
      datakey: [],
      loadingContent: false,
      loadCatcard: false,
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v2/1/popular.php")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.drinks,
          loadingContent: true,
          loadCatcard: true,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
    this.setState({ loadingContent: false });
  }

  render() {
    const loadingview = this.state.loadingContent ? (
      false
    ) : (
      <View
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
        }}
      >
        <HomeScreenLoading />
      </View>
    );

    const LoadcategorycarcView = this.state.loadCatcard ? (
      false
    ) : (
      <View style={{ flex: 1, height: 120 }}>
        <Shimmer height={100} />
      </View>
    );

    const { width, height } = Dimensions.get("window");
    var date = new Date().getDay(); //To get the Current Date
    var month = new Date().getMonth() + 1;
    var todaysdate = new Date().getDate();
    var weekday = new Array(7);
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] = "Sunday";

    var monthday = new Array(7);
    monthday[1] = "January";
    monthday[2] = "February";
    monthday[4] = "March";
    monthday[4] = "April";
    monthday[5] = "May";
    monthday[6] = "June";
    monthday[7] = "July";
    monthday[8] = "August";
    monthday[9] = "September";
    monthday[10] = "October";
    monthday[11] = "November";
    monthday[12] = "December";

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainlayout}
      >
        {loadingview}
        <View style={styles.centred}>
          
          <Text style={styles.header}>Look for our popular Drinks</Text>
          <Text style={styles.datelayout}>
            {weekday[date] + ", " + monthday[month] + " " + todaysdate}{" "}
          </Text>
          {loadingview}
          <FlatList
            style={styles.list}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.dataSource}
            keyExtractor={(data, index) => data.idDrink}
            renderItem={({ item }) => (
              <View>
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
                  <View style={styles.cardView}>
                   
                      <Shimmer width={width - 55} height={height / 4.5} />
                    
                    <SharedElement
                      id={`item.${item.idDrink}.photo`}
                      style={{ position: "absolute" }}
                    >
                      <Image
                        style={styles.image}
                        source={{ uri: item.strDrinkThumb }}
                      />
                    </SharedElement>
                    <View style={styles.textView}>
                      <SharedElement id={`item.${item.strDrink}.text`}>
                        <Text style={styles.itemTitle}>{item.strDrink}</Text>
                      </SharedElement>
                    </View>
                  </View>
                </TouchableScale>
              </View>
            )}
          />
          <Text style={styles.categorytext}>Categories you might like</Text>
        </View>

        <View style={styles.MainContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            data={datactr}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  margin: 8,
                  height: 120,
                }}
              >
                <TouchableScale
                  activeScale={0.95}
                  tension={15}
                  friction={7}
                  useNativeDriver
                  onPress={() =>
                    this.props.navigation.navigate("list", {
                      screen: item.strCategory,
                    })
                  }
                >
                  <View
                    style={{
                      opacity: 0.82,
                      backgroundColor: "white",
                      borderRadius: 15,
                    }}
                  >
                    {LoadcategorycarcView}
                    <Image
                      style={styles.imageThumbnail}
                      source={{ uri: item.image }}
                      blurRadius={3.2}
                    />
                  </View>
                  <Text style={styles.textthumb}>{item.strCategory}</Text>
                </TouchableScale>
              </View>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainlayout: {
    flex: 1,
    backgroundColor: "white",
  },
  centred: {
    justifyContent: "center",
  },
  header: {
    left: 12,
    marginTop: 8,
    color: "black",
    fontSize: 25,
  },
  imagecard: {
    resizeMode: "cover",
    left: 25,
    right: 25,
    width: Dimensions.get("window").width - 80,
    height: Dimensions.get("window").height - 490,
    borderRadius: 10,
    marginRight: 15,

  },
  textcard: {
    left: 25,
    width: Dimensions.get("window").width - 55,
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 25,
  },
  cards: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  datelayout: {
    left: 12,
    color: "black",
    fontSize: 15,
    marginTop: 0,
    marginBottom: 3,
  },
  list: {},
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
  },
  popularText: {
    color: "white",
    fontSize: 22,
    fontFamily: "BalsamiqSans-Bold",
  },
  categorytext: {
    left: 12,
    fontSize: 25,
    marginTop: 5,
  },
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 5,
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    borderRadius: 15,
  },
  textthumb: {
    marginRight: 10,
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  cardView: {
    left: 8,
    width: Dimensions.get("window").width - 55,
    height: Dimensions.get("window").height / 4.5,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  ShimmerView: {
    width: Dimensions.get("window").width - 55,
    height: Dimensions.get("window").height / 4.5,
    borderRadius: 20,
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    position: "absolute",
    resizeMode: "cover",
    width: Dimensions.get("window").width - 55,
    height: Dimensions.get("window").height / 4.5,
    borderRadius: 10,
  },
  itemTitle: {
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
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default HomeScreen;
