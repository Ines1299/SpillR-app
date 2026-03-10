import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import NavigationBar from "./navigation";

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Search</Text>
      </View>
      <NavigationBar />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
