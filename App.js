import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
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
