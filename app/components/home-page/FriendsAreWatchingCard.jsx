import { View, Text, StyleSheet, Image } from "react-native";

export default function FriendsAreWatchingCards() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=3" }}
        style={styles.image}
      ></Image>
      <Text style={styles.cardText}>3 friends and 200 others are watching</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: "#211F21",
    borderWidth: 0.5,
    borderColor: "#2D2B2E",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 6,
    flexDirection: "row",
    width: 250,
  },
  cardText: {
    marginLeft: 10,
    flex: 1,
    color: "white",
    flexWrap: "wrap",
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    marginTop: 2,
  },
});
