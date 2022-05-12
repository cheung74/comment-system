import React from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../assets";
import EnterBtn from "./EnterBtn";
import TextField from "./TextField";

type Props = {
  addNewComment: (val: string) => void;
};

const NewCommentField = ({ addNewComment }: Props) => {
  const [text, onChangeText] = React.useState("");

  const onEnterPress = () => {
    addNewComment(text);
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <TextField {...{ text, onChangeText, isNewComment: true }} />
      <EnterBtn onPress={onEnterPress} />
    </View>
  );
};

export default NewCommentField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 2,
    minWidth: "60%",
  },
});
