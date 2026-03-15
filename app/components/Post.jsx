import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Send from "../../assets/send-button.jsx";

const Post = ({ comment_id, episode_id }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    console.log(input);
    setInput("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="What's happening?"
          placeholderTextColor="#8E8E8E"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <Send width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#101010",
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#2a2a2a",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    color: "#ffffff",
    fontSize: 15,
  },
  sendButton: {
    position: "absolute",
    right: 14,
  },
});

export default Post;
