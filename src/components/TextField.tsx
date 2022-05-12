import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "../assets";

type Props = {
  text: string;
  onChangeText: (val: string) => void;
  isNewComment: boolean;
};

const TextField = ({ text, onChangeText, isNewComment }: Props) => {
  return (
    <TextInput
      style={[
        styles.input,
        {
          minWidth: isNewComment ? "60%" : "80%",
          borderTopWidth: isNewComment ? 0 : 1,
        },
      ]}
      onChangeText={onChangeText}
      value={text}
      placeholder={isNewComment ? "Enter new comment here" : ""}
      placeholderTextColor="black"
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 2,
    minWidth: "60%",
  },
});
