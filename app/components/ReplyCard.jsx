import { View, Text, Image, StyleSheet } from "react-native";
import { useContext } from "react";
import { UserContext } from "../context/User";

const ReplyCard = ({ reply }) => {
  const {
    user_id,
    body,
    runtime_seconds,
    username,
    avatar_url,
    parent_username,
  } = reply;
  const { loggedInUser } = useContext(UserContext);

  const formatRuntime = (seconds) => {
    if (!seconds) return "";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  const actor = user_id === loggedInUser.user_id ? "you" : `@${username}`;

  return (
    <View style={styles.replyRow}>
      <Image style={styles.replyAvatar} source={{ uri: avatar_url }} />
      <View style={styles.replyContent}>
        <View style={styles.replyTopRow}>
          <Text style={styles.replyUser}>{actor}</Text>
          <Text style={styles.replyTime}>{formatRuntime(runtime_seconds)}</Text>
        </View>
        <Text style={styles.replyText}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  replyRow: {
    flexDirection: "row",
    paddingVertical: 8,
    gap: 10,
  },
  replyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: -16,
  },
  replyContent: {
    flex: 1,
    gap: 4,
  },
  replyTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  replyUser: {
    color: "#8E8E8E",
    fontSize: 12,
  },
  replyTime: {
    color: "#8E8E8E",
    fontSize: 11,
  },
  replyText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default ReplyCard;
