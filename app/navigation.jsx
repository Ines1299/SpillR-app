import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import homeIcon from "../assets/home.png";
import searchIcon from "../assets/search-normal.png";
import userIcon from "../assets/user.png";
import notificationIcon from "../assets/notification-status.png";

const NavigationBar = () => {
  return (
    <View style={styles.navBar}>
      <Link href="/" style={{ marginTop: 10 }}>
        <Image source={homeIcon} style={styles.icon} />
      </Link>
      <Link href="/search" style={{ marginTop: 10 }}>
        <Image source={searchIcon} style={styles.icon} />
      </Link>
      <Link href="/user" style={{ marginTop: 10 }}>
        <Image source={userIcon} style={styles.icon} />
      </Link>
      <Link href="/notifications" style={{ marginTop: 10 }}>
        <Image source={notificationIcon} style={styles.icon} />
      </Link>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#484848ff",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
