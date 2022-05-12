import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { IComment } from "../types";
import Comment from "./Comment";
import NewCommentField from "./NewCommentField";

const Comments = () => {
  const [comments, setComments] = React.useState<IComment>({});

  const addNewComment = (val: string) => {
    const newState = { ...comments };
    const keyNum = Object.keys(newState).length;
    const id = keyNum.toString();
    newState[id] = {};
    newState[id]["val"] = val;
    newState[id]["reply"] = {};
    setComments(newState);
  };

  const replyComment = (val: string, ids: string[]) => {
    const newState = { ...comments };
    let comment = newState;
    for (const id of ids) {
      const _comment = comment[id]["reply"];
      comment = _comment;
    }
    const keyNum = Object.keys(comment).length;
    const replyId = keyNum.toString();
    comment[replyId] = {};
    comment[replyId]["val"] = val;
    comment[replyId]["reply"] = {};
    setComments(newState);
  };

  const renderComment = (
    state: IComment,
    previousComment: string,
    previousId: string,
    ids: string[]
  ) =>
    Object.keys(state).map((id: string) => {
      const _ids = ids.length === 0 ? [id] : [...ids];
      if (Object.keys(state[id].reply).length >= 0 && ids.length > 0) {
        _ids.push(id);
      }
      return (
        <View
          key={`${id} -${Math.random().toFixed(2)}`}
          style={styles.commentContainer}
        >
          <Comment
            key={`${id}-${Math.random().toFixed(4)}`}
            ids={ids.length === 0 ? [id] : _ids}
            comment={state[id]}
            previousComment={previousComment}
            previousId={previousId}
            replyComment={replyComment}
          />
          {Object.keys(state[id].reply).length > 0
            ? renderComment(state[id].reply, state[id].val, id, _ids)
            : null}
        </View>
      );
    });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMMENTS</Text>
      <NewCommentField addNewComment={addNewComment} />
      <View style={styles.commentContainer}>
        {renderComment(comments, "", "", [])}
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  commentContainer: {
    alignItems: "flex-end",
    paddingVertical: 16,
  },
  title: {
    fontSize: 36,
  },
});
