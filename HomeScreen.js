import * as React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    this.props.navigation.setOptions({
      headerBackTitle: "",
      headerShown: false,
    });
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: 300, marginTop: 30 }}
          source={require("./assets/images/y.png")}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 60, fontWeight: "bold", marginTop: -40 }}>
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            textAlign: "center",
            marginHorizontal: 20,
          }}
        >
          Let's select some challenges and achieve them together!
        </Text>

        <View style={{ flexDirection: "row", margin: 20, paddingVertical: 20 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
            style={{
              backgroundColor: "#0d47a1",
              padding: 10,
              width: 160,
              borderRadius: 30,
              marginVertical: 2,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 10,
              width: 150,
              borderRadius: 30,
              marginVertical: 2,
              marginHorizontal: 5,
              borderWidth: 2,
              borderColor: "#0d47a1",
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#0d47a1", fontSize: 18 }}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, marginTop: -20 }}>
          Or via social meedia
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#3f51b5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
              f
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#f44336",
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
              G
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#1565c0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
              in
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
