import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 28, paddingTop: 15 }}>Welcome Back! </Text>
        <Text
          style={{ fontSize: 16, paddingTop: 15, color: "gray", marginTop: 2 }}
        >
          Sign in to continue
        </Text>

        <TextInput
          style={{
            marginTop: 40,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Username"
        />

        <TextInput
          style={{
            marginTop: 40,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Password"
        />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            style={{
              width: 200,
              backgroundColor: "#0d47a1",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40,
              marginTop: 30,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
              Login Now
            </Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 20 }}>Forgot Password ?</Text>

          <View style={{ flexDirection: "row", marginTop: 40 }}>
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

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={{ color: "gray" }}>Don't have an count? </Text>
            <Text style={{ fontWeight: "bold" }}> Sign Up</Text>
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
  },
});
