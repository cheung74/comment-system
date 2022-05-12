import { SafeAreaView, StyleSheet, View } from "react-native";

import { Comments } from "./src/components";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Comments />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
