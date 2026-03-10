import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import NavigationBar from "./navigation";

const userPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User</Text>
      <NavigationBar />
    </View>
  );
};

export default userPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
