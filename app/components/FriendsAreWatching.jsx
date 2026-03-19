import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import FriendsAreWatchingCard from "./FriendsAreWatchingCard";
import { globalStyles } from "../../styles/globalStyles";
import { UserContext } from "../../context/User.jsx";
import { useEffect, useState, useContext } from "react";
import { getUserById } from "../../utils/utilsFunctions.js";
import socket from "../../socket/connection.js";

export default function FriendsAreWatching() {
  const { loggedInUser } = useContext(UserContext);
  const { userId } = loggedInUser;
  const [friendList, setFriendList] = useState([
    "e5f6a7b8-c9d0-1234-efab-345678901234",
  ]);
  const [roomStatus, setRoomStatus] = useState([]);

  useEffect(() => {
    const fetchUserObj = async () => {
      try {
        const userObj = await getUserById(userId);
        console.log(userObj);
        const friends = userObj.friends;
        setFriendList(
          friends.map((friend) => {
            return friend.friend_user_id;
          }),
        );
      } catch (error) {}
    };

    fetchUserObj();
  }, []);

  useEffect(() => {
    const handleRoomStatus = (room) => {
      console.log("receive room status", room);
      setRoomStatus(room);
    };
    const handleRoomUserIn = (episodeId) => {
      console.log(`receive room ${episodeId} user in`);
      setRoomStatus((prev) =>
        prev.map((room) =>
          room.episodeId === episodeId
            ? { ...room, userWatching: (room.userWatching || 0) + 1 }
            : room,
        ),
      );
    };
    const handleRoomUserOut = (episodeId) => {
      console.log(`receive room ${episodeId} user in`);
      setRoomStatus((prev) =>
        prev.map((room) =>
          room.episodeId === episodeId
            ? { ...room, userWatching: (room.userWatching || 0) - 1 }
            : room,
        ),
      );
    };
    const handleFriendJoin = ({ userId, episodeId }) => {
      console.log(`receive room ${episodeId} friend ${userId} join`);
      setRoomStatus((prev) =>
        prev.map((room) =>
          room.episodeId === episodeId
            ? { ...room, friendsWatching: (room.friendsWatching || 0) + 1 }
            : room,
        ),
      );
    };
    const handleFriendLeave = ({ userId, episodeId }) => {
      console.log(`receive room ${episodeId} friend ${userId} leave`);
      setRoomStatus((prev) =>
        prev.map((room) =>
          room.episodeId === episodeId
            ? { ...room, friendsWatching: (room.friendsWatching || 0) - 1 }
            : room,
        ),
      );
    };

    socket.connect();
    console.log(`socket connected!!!!`);
    socket.emit("room:load", friendList);
    socket.on("roomList:status", handleRoomStatus);
    socket.on("room:userIn", handleRoomUserIn);
    socket.on("room:userOut", handleRoomUserOut);
    socket.on("friend:join", handleFriendJoin);
    socket.on("friend:leave", handleFriendLeave);

    return () => {
      socket.off("roomList:status", handleRoomStatus);
      socket.off("room:userIn", handleRoomUserIn);
      socket.off("room:userOut", handleRoomUserOut);
      socket.off("friend:join", handleFriendJoin);
      socket.off("friend:leave", handleFriendLeave);
    };
  }, [friendList]);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Everyone is talking about ...</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={globalStyles.horizontalList}
      >
        {roomStatus.map((room) => {
          return (
            <FriendsAreWatchingCard
              key={room.episode}
              episodeId={room.episodeId}
              friendsWatching={room.friendsWatching}
              userWatching={room.userWatching}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    textAlign: "left",
    color: "#8E8E8E",
    fontWeight: 700,
  },
  container: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
});
