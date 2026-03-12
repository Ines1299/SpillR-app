import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function EpisodeTimelineScrubber() {
  const [currentSeconds, setCurrentSeconds] = useState(1200);

  const runtimeSeconds = 3600;
  const trackWidth = 300;
  let currentWidth = (currentSeconds / runtimeSeconds) * trackWidth;

  const handlePress = (event) => {
    const x = event.nativeEvent.locationX;
    const positionToSeconds = (x / trackWidth) * runtimeSeconds;
    console.log(positionToSeconds);
    setCurrentSeconds(positionToSeconds);
  };

  let minutes = Math.floor(currentSeconds / 60);
  let seconds = Math.floor(currentSeconds % 60);

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.greyTrackBar}>
          <View
            style={[
              styles.currentPosition,
              { transform: [{ translateX: currentWidth - 5 }] },
            ]}
          ></View>
          <View
            style={[styles.purpleProgressBar, { width: currentWidth }]}
          ></View>
        </View>
      </Pressable>
      <Text
        style={[
          styles.timeDisplay,
          { transform: [{ translateX: currentWidth - 25 }] },
        ]}
      >{`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greyTrackBar: {
    height: 15,
    width: 300,
    backgroundColor: "grey",
  },
  purpleProgressBar: {
    height: 15,
    backgroundColor: "purple",
  },
  currentPosition: {
    position: "absolute",
    width: 14,
    height: 15,
    borderRadius: 100,
    backgroundColor: "white",
    zIndex: 1,
  },
  timeDisplay: {
    marginTop: 5,
    color: "black",
    width: 50,
    textAlign: "center",
  },
});
