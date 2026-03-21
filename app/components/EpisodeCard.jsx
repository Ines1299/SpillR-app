import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function EpisodeCard({
  episode,
  selectedSeason,
  seasonNumber,
  showName,
  tv_show_img_url,
  isPremier,
}) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `/episode-live-chat/${episode.episode_id}`,
          params: {
            showName: showName,
            seasonNumber: seasonNumber,
          },
        })
      }
    >
      <View style={styles.episodeCard}>
        <View key={episode.episode_id}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: "100%", aspectRatio: 1, borderRadius: 6 }}
              source={{
                uri:
                  episode.episode_url ||
                  selectedSeason.season_img_url ||
                  tv_show_img_url,
              }}
            />
            {isPremier && <View style={styles.liveIndicator} />}
          </View>
          <Text
            style={styles.episodeInfo}
          >{`Season ${selectedSeason.season_number}, Episode ${
            !episode.episode_number ? "special" : episode.episode_number
          }`}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  liveIndicator: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22c55e",
  },
  episodeCard: {
    width: "100%",
  },
  episodeInfo: {
    marginTop: 10,
    color: "white",
  },
});
