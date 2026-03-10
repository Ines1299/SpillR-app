import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import NavigationBar from "./navigationBar";
import SearchBar from "./searchBar";

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <SearchBar />
      <NavigationBar />
    </View>
  );
};

export default SearchPage;

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
