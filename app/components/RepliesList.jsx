import ReplyCard from "./ReplyCard";
import Post from "./Post";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getRepliesByCommentId } from "../../utils/utilsFunctionsByApi.js";

const RepliesList = ({ comment_id }) => {
  const [replylist, setReplyList] = useState([]);
  useEffect(() => {
    const fetchRepliesForThisComment = async () => {
      const result = await getRepliesByCommentId(comment_id);
      if (result.length > 0) {
        setReplyList(result);
      }
    };
    fetchRepliesForThisComment();
  }, []);
  return (
    <View style={styles.container}>
      {replylist.map((reply) => (
        <ReplyCard key={reply.reply_id} reply={reply} />
      ))}
      <Post comment_id={comment_id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 8,
    paddingTop: 60,
    overflow: "visible",
  },
});

export default RepliesList;
