import { Text, View, StyleSheet, Button } from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomePage() {

  function goToProduct(){
    const randomId = Math.ceil(Math.random() * 10);
    router.push(`/product/${randomId}`);
  }

  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/User">go to User Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})