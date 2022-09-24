import React, { useState, useEffect, useCallback } from "react";

import {
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  StyleSheet,
} from "react-native";

import Styles from "./styles";

import { LoadingModal } from "../../components/LoadingModal";

// import { Icons, Colors } from "../../Assets";

import { useSelector, useDispatch } from "react-redux";

import PostCard from "./RenderPosts";
import { fetchPostbyId, fetchPostsList } from "../../redux/actions";
import { Post } from "../../lib/repositories/interfaces/IPostRepository";
import { reducersState } from "../../redux/reducers";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const postsList: Post[] | [] = useSelector(
    (state: reducersState) => state.post.postList
  );

  const isLoading: boolean = useSelector(
    (state: reducersState) => state.post.isLoading
  );

  useEffect(() => {
    dispatch(fetchPostsList());
  }, []);

  const onSelectPost = useCallback((postId: number) => {
    dispatch(fetchPostbyId(postId));
  }, []);

  return (
    <View style={Styles.MainContainer}>
      <FlatList
        indicatorStyle={"white"}
        style={{ flex: 1, marginTop: 20 }}
        data={postsList}
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginVertical: 15,
              borderBottomColor: "#737373",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        )}
        renderItem={({ item }: { item: Post }) => (
          <PostCard post={item} onClickPost={onSelectPost} />
        )}
        keyExtractor={(item: Post) => item.id + ""}
      />

      {isLoading && <LoadingModal />}
    </View>
  );
};

export default Home;
