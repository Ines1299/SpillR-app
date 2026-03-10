import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={{ marginTop: 10 }}>
        Home
      </Link>
      <Link href="/searchPage" style={{ marginTop: 10 }}>
        Search
      </Link>
      <Link href="/userPage" style={{ marginTop: 10 }}>
        User
      </Link>
      <Link href="/notificationsPage" style={{ marginTop: 10 }}>
        Notifications
      </Link>
    </View>
  );
};

export default NavigationBar;

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
