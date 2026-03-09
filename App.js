import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>SPILLR!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//styling is done below
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#653535",
    alignItems: "center",
    justifyContent: "center",
  },
});
