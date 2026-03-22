import { View, StyleSheet, FlatList } from "react-native";
import { useState, useContext, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { UserContext } from "../contexts/UserContext";
import { fetchFriendRequests } from "../api";
import FriendRequestCard from "./FriendRequestCard";

export default function NotificationsList() {
  const { loggedInUser } = useContext(UserContext);
  const [friendRequests, setFriendRequests] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const getRequests = async () => {
        const data = await fetchFriendRequests(loggedInUser.user_id);
        setFriendRequests(data);
      };
      getRequests();
    }, [loggedInUser.user_id]),
  );

  const handleAccept = async (user_id_1) => {
    try {
      await acceptFriendAPI(user_id_1, loggedInUser.user_id);
      setFriendRequests((prev) =>
        prev.filter((request) => request.user_id_1 !== user_id_1),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecline = async (user_id_1) => {
    try {
      await removeFriendAPI(user_id_1, loggedInUser.user_id);
      setFriendRequests((prev) =>
        prev.filter((request) => request.user_id_1 !== user_id_1),
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.notifications}>
      {friendRequests.map((request) => (
        <FriendRequestCard
          key={request.friends_id.toString()}
          user_id_1={request.user_id_1}
          username={request.requester_username}
          avatar_url={request.requester_avatar_url}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  notifications: {
    paddingTop: 20,
    paddingBottom: 80,
  },
});
