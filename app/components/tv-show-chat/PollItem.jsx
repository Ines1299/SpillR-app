import { View, Text, StyleSheet, Image, Button } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";
import TitleText from "../ui/ShowTitleText";

export default function PollItem({ poll, horizontal = true }) {
  //   const router = useRouter();

  const IMAGE_WIDTH = horizontal ? 140 : 100;
  const IMAGE_HEIGHT = horizontal ? 200 : 150;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{poll.poll_name}</Text>
      <Button>
        {poll.field_1} vs {poll.field_2}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    padding: 12,
    marginRight: 5,
    backgroundColor: "#ff5ab8ff",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 6,
  },
});
