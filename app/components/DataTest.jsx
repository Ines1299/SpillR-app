import getTvShowByName from "../../utils/utilsFunctions";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function DataTest() {
  const [show, setShow] = useState("");

  useEffect(() => {
    async function getShows() {
      const result = await getTvShowByName("Taskmaster");
      console.log(result);
      setShow(result);
    }

    getShows();
  }, []);

  return (
    <View>
      <Text>{show.name}</Text>
    </View>
  );
}
