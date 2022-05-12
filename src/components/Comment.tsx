import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { IComment } from "../types";
import EnterBtn from "./EnterBtn";
import TextField from "./TextField";

type Props = {
  ids: string[];
  comment: IComment;
  previousComment: string;
  previousId: string;
  replyComment: (val: string, ids: string[]) => void;
};

const Comment = ({
  ids,
  comment,
  replyComment,
  previousComment,
  previousId,
}: Props) => {
  const { val } = comment;

  const layer = React.useMemo(() => ids.length - 1, [ids]);

  const [text, onChangeText] = React.useState("");

  const onEnterPress = () => {
    replyComment(text, ids);
    onChangeText("");
  };

  const renderTitle = (layer: number) => {
    switch (layer) {
      case 0:
        return `${val} #${ids[0]}`;
      case 1:
        return `${val} on ${previousComment} #${previousId} `;
      default:
        return `${val} on ${previousComment}`;
    }
  };
  return (
    <View
      style={{
        maxWidth:
          layer === 0 ? "100%" : layer <= 2 ? `${100 - layer * 15}%` : "70%",
      }}
    >
      <Text>{renderTitle(layer)}</Text>
      <View style={[styles.textContainer]}>
        <TextField {...{ text, onChangeText, isNewComment: false }} />
        <EnterBtn onPress={onEnterPress} />
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
  },
});
