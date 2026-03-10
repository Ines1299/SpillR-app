import { View, Text, StyleSheet } from "react-native";
import TrendingCard from "./trendingCard";

export default function Trending() {
  return (
    <View style={styles.trending}>
      <TrendingCard />
      <TrendingCard />
      <TrendingCard />
    </View>
  );
}

const styles = StyleSheet.create({
  trending: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
});
