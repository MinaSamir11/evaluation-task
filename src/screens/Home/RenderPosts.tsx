import React, { useState } from "react";

import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../lib/repositories/interfaces/IPostRepository";

import MaleIcon from "../../assets/male.svg";
import FemaleIcon from "../../assets/female.svg";

type RenderPostsProps = { post: Post; onClickPost: (postId: number) => void };

const PostCard: React.FC<RenderPostsProps> = React.memo(
  ({ post, onClickPost }: RenderPostsProps) => {
    const { body, title, user } = post;
    console.log("user", user);
    return (
      <View style={{ marginTop: 12, marginStart: 12, marginEnd: 12 }}>
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
            {user.gender === "male" ? (
              <MaleIcon width={45} height={45} />
            ) : (
              <FemaleIcon width={45} height={45} />
            )}

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {user.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#E1E9EF",
            padding: 20,
            marginTop: 8,
            borderRadius: 20,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
            >
              {title}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "500", marginStart: 5 }}>
              {body}
            </Text>
          </View>

          <Pressable
            onPress={() => onClickPost(post.id)}
            style={({ pressed }) => [
              { opacity: pressed ? 0.2 : 1.0 },
              {
                width: "100%",
                height: 40,
                backgroundColor: "#DDF2E4",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginTop: 10,
              },
            ]}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              More DETAILS
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
);
export default PostCard;
