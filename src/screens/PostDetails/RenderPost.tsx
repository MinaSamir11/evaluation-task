import React, { useState } from "react";

import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../lib/repositories/interfaces/IPostRepository";

import MaleIcon from "../../assets/male.svg";
import FemaleIcon from "../../assets/female.svg";
import { reducersState } from "../../redux/reducers";

const PostCard: React.FC = React.memo(() => {
  const postDetails: Post | null = useSelector(
    (state: reducersState) => state.post.postDetails
  );
  console.log("postDetails", postDetails?.body);
  return (
    <View
      style={{
        marginTop: 12,
        marginStart: 12,
        marginEnd: 12,
        flex: 0.5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {postDetails?.user.gender === "male" ? (
            <MaleIcon width={45} height={45} />
          ) : (
            <FemaleIcon width={45} height={45} />
          )}

          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {postDetails?.user.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#E1E9EF",
          padding: 20,
          marginTop: 8,
          borderRadius: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            {postDetails?.title}
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", marginStart: 5 }}>
            {postDetails?.body}
          </Text>
        </View>
      </View>
    </View>
  );
});
export default PostCard;
