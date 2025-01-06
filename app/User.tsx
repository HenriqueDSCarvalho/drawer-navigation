import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function UserPage() {
  return (
    <View style={styles.container}>
      <Text>User page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightpink",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})