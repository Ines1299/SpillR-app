import { View, Text, StyleSheet } from "react-native";
import DataTest from "../components/DataTest";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Notifications Page</Text>
      <DataTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
