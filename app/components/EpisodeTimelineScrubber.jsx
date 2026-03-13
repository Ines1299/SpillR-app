import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function EpisodeTimelineScrubber({
  episodeRuntime,
  setIsScrubbing,
}) {
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const runtimeSeconds = episodeRuntime * 60;
  const roundedSeconds = Math.floor(currentSeconds);
  let minutes = Math.floor(roundedSeconds / 60);
  let seconds = Math.floor(roundedSeconds % 60);

  const trackWidth = 300;
  let currentWidth = (currentSeconds / runtimeSeconds) * trackWidth;

  const confineAndConvertXPosition = (x) => {
    let limitedX = x;

    if (limitedX < 0) {
      limitedX = 0;
    }

    if (limitedX > trackWidth) {
      limitedX = trackWidth;
    }

    const seconds = (limitedX / trackWidth) * runtimeSeconds;

    setCurrentSeconds(seconds);
  };

  const handlePress = (event) => {
    const x = event.nativeEvent.locationX;
    confineAndConvertXPosition(x);
  };

  const leftOffset = 28;

  return (
    <View>
      <Text
        style={[
          styles.timeDisplay,
          { transform: [{ translateX: leftOffset + currentWidth - 25 }] },
        ]}
      >{`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}</Text>
      <View style={styles.buttonAndBarContainer}>
        <View style={styles.buttonContainer}>
          <FontAwesome6 name="circle-play" style={styles.playOrPauseButton} />
        </View>
        <View
          style={styles.greyTrackBar}
          onStartShouldSetResponder={() => true} //  key for draggin (not just pressing)
          onMoveShouldSetResponder={() => true}
          onResponderGrant={() => {
            setIsScrubbing(true);
            handlePress;
          }}
          onResponderMove={handlePress}
          onResponderRelease={() => setIsScrubbing(false)}
          onResponderTerminate={() => setIsScrubbing(false)}
        >
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonAndBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  playOrPauseButton: {
    fontSize: 20,
    color: "black",
  },
  greyTrackBar: {
    height: 8,
    width: 300,
    borderRadius: 5,
    backgroundColor: "#383838ac",
  },
  purpleProgressBar: {
    height: 8,
    borderRadius: 5,
    backgroundColor: "#9D00FF",
  },
  currentPosition: {
    position: "absolute",
    width: 8,
    height: 8,
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
