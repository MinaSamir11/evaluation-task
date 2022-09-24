import React, { useState, useEffect, useCallback } from "react";

import { View, FlatList, Pressable, Text, StyleSheet } from "react-native";

import { LoadingModal } from "../../components/LoadingModal";

import { useSelector, useDispatch } from "react-redux";

import PostCard from "./RenderPost";
import { fetchPostbyId, fetchPostsList } from "../../redux/actions";
import { Post } from "../../lib/repositories/interfaces/IPostRepository";
import { reducersState } from "../../redux/reducers";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { Comment as CommentType } from "../../redux/actions/types";
import { SafeAreaView } from "react-native-safe-area-context";
import Comment from "./Comment";

const PostDetails: React.FC = () => {
  const isLoading: boolean = useSelector(
    (state: reducersState) => state.post.isLoading
  );

  const postDetails: Post | null = useSelector(
    (state: reducersState) => state.post.postDetails
  );

  let [ShowComment, setShowModelComment] = useState<boolean>(false);
  let [animateModal, setanimateModal] = useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <PostCard />
      </View>

      {isLoading && <LoadingModal />}

      <View
        style={{
          bottom: 0,
          width: "100%",
          height: "20%",
          justifyContent: "flex-end",
        }}
      >
        {postDetails!.comments!.nodes!.length > 0 && (
          <Pressable
            onPress={() => {
              setShowModelComment(true);
            }}
            style={({ pressed }) => [
              { opacity: pressed ? 0.2 : 1.0 },
              {
                width: "100%",
                paddingBottom: 22,
                height: "50%",
                backgroundColor: "#DDF2E4",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                marginTop: 10,
              },
            ]}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              View Comments
            </Text>
          </Pressable>
        )}
      </View>

      <SwipeUpDownModal
        modalVisible={ShowComment}
        PressToanimate={animateModal}
        //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
        ContentModal={
          <View style={styles.containerContent}>
            <FlatList
              data={postDetails?.comments.nodes ?? []}
              renderItem={({ item }: { item: CommentType }) => (
                <Comment comment={item} />
              )}
              keyExtractor={(item: CommentType) => item.id + ""}
            />
          </View>
        }
        HeaderStyle={styles.headerContent}
        ContentModalStyle={styles.Modal}
        HeaderContent={
          <View style={styles.containerHeader}>
            <Pressable
              onPress={() => {
                setanimateModal(true);
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Down me</Text>
            </Pressable>
          </View>
        }
        onClose={() => {
          setShowModelComment(false);
          setanimateModal(false);
        }}
      />
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  containerContent: { flex: 1, marginTop: 50 },
  containerHeader: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#269BF4",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  headerContent: {
    marginTop: 80,
  },
  Modal: {
    backgroundColor: "#fff",
    marginTop: 80,
  },
});
