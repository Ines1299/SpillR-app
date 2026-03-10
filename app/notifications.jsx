import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import NavigationBar from "./navigation";

const notificationsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <NavigationBar />
    </View>
  );
};

export default notificationsPage;

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
