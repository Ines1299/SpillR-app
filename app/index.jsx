import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import NavigationBar from "./navigationBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SpillR</Text>
        <Text style={{ marginTop: 10 }}>Trending</Text>

        <View style={styles.card}>
          <Text>CARD!!!</Text>
        </View>
      </View>

      <NavigationBar />
    </View>
  );
};

export default Home;

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
  card: {
    marginTop: 10,
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
});
