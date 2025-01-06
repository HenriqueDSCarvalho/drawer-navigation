import { Text, View, StyleSheet, Button } from "react-native";
import { Link, router } from "expo-router";


export default function settingsPage() {

  function goToProduct(){
    const randomId = Math.ceil(Math.random() * 10);
    router.push(`/product/${randomId}`);
  }

  return (
    <View style={styles.container}>
      <Text>settings page</Text>
      <Link href="/User">go to User Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blueviolet",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})