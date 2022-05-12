import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  onPress: () => void;
};

const EnterBtn = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Enter</Text>
    </TouchableOpacity>
  );
};

export default EnterBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    padding: 2,
  },
  text: {
    color: "white",
  },
});
