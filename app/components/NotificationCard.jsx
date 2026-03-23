import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function NotificationCard({
  user_id_1,
  username,
  avatar_url,
  onAccept,
  onDecline,
  reaction_id,
  reply_id,
  status,
  original_body,
  notification_type,
  episode_number,
  season_number,
  tv_show_name,
}) {
  const isFriendRequest = !!onAccept;

  const getActionText = () => {
    const location = tv_show_name
      ? ` on ${tv_show_name} S${season_number} E${episode_number}`
      : "";
    if (notification_type === "reply_to_comment")
      return `replied to your comment${location}`;
    if (notification_type === "reaction_to_comment")
      return `reacted to your comment${location}`;
    if (notification_type === "reaction_to_reply")
      return `reacted to your reply${location}`;
  };

  return (
    <View style={[styles.notification, status === "unread" && styles.unread]}>
      <Image source={{ uri: avatar_url }} style={styles.notificationAvatar} />
      <View style={styles.textContainer}>
        <Text style={styles.user}>@{username}</Text>
        <Text style={styles.action}>
          {isFriendRequest ? "wants to be your friend" : getActionText()}
        </Text>
        {!isFriendRequest && original_body && (
          <Text style={styles.commentPreview}>"{original_body}"</Text>
        )}

        {isFriendRequest && (
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => onAccept(user_id_1)}
            >
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.declineButton}
              onPress={() => onDecline(user_id_1)}
            >
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 16,
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  notificationAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  user: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: "bold",
    color: "#ffffff",
  },
  action: {
    fontSize: 12,
    color: "#8E8E8E",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  acceptButton: {
    borderColor: "#2663f4",
    borderWidth: 1.2,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  acceptText: {
    color: "#2663f4",
    fontSize: 12,
    fontWeight: "800",
  },
  declineButton: {
    borderColor: "#505050",
    borderWidth: 1.2,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  declineText: {
    color: "#505050",
    fontSize: 12,
    fontWeight: "800",
  },
  commentPreview: {
    color: "#e4e4e4",
    fontSize: 13,
    lineHeight: 15,
    paddingRight: 8,
  },
});
