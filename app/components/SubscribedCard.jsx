import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User";

export default function SubCard({ show }) {
  const router = useRouter();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `/tv-show/${show.tv_show_id}`,
          params: { user_id: loggedInUser.user_id },
        })
      }
    >
      <Image style={styles.showCard} source={{ uri: show.tv_show_img_url }} />
      <Text style={styles.showTitle}>{show.name}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  showCard: {
    width: 185,
    height: 140,
    borderRadius: 14,
  },
  showTitle: {
    color: "#8E8E8E",
    marginTop: 10,
    marginLeft: 1,

    marginBottom: 10,
  },
});
