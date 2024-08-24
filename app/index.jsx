import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.viewPort}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1516900557549-41557d405adf?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{ width: 1000, height: 1000, position: "absolute" }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!!!</Text>
        <Link href="/tasks" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start using the App!</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewPort: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 50,
    color: "white",
  },
  button: {
    backgroundColor: "#141736",
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 23,
    color: "white",
  },
});
