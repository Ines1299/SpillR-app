import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useState, useContext, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { UserContext } from "../../context/User.jsx";
import {
  fetchFriendRequests,
  acceptFriendAPI,
  removeFriendAPI,
  getNotificationsForThisUser,
} from "../../utils/utilsFunctions";

import NotificationCard from "./NotificationCard.jsx";

export default function NotificationsList() {
  const { loggedInUser } = useContext(UserContext);
  const [friendRequests, setFriendRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const getRequests = async () => {
        const data = await fetchFriendRequests(loggedInUser.user_id);
        console.log("requests:", data);
        setFriendRequests(data);
      };

      const getNotifications = async () => {
        const data = await getNotificationsForThisUser(loggedInUser.user_id);
        console.log("notifications:", data);
        setNotifications(data);
      };

      getRequests();
      getNotifications();
    }, [loggedInUser.user_id]),
  );
  const handleAccept = async (user_id_1) => {
    try {
      console.log(user_id_1, loggedInUser.user_id);
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
      {!friendRequests ? (
        <Text style={styles.emptyText}>no friend requests yet...</Text>
      ) : (
        friendRequests.map((request) => (
          <NotificationCard
            key={request.friends_id.toString()}
            user_id_1={request.user_id_1}
            username={request.requester_username}
            avatar_url={request.requester_avatar_url}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))
      )}
      {!notifications || notifications.length === 0 ? (
        <Text style={styles.emptyText}>no notifications yet...</Text>
      ) : (
        notifications.map((notification) => (
          <NotificationCard
            key={notification.notification_id.toString()}
            username={notification.actor_username}
            avatar_url={notification.actor_avatar_url}
            actor_id={notification.actor_id}
            reaction_id={notification.reaction_id}
            reply_id={notification.reply_id}
            status={notification.status}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  emptyText: {
    color: "#ffffff",
    padding: 16,
    fontSize: 18,
    fontWeight: "400",
  },
  notifications: {
    paddingTop: 20,
    paddingBottom: 80,
  },
});
