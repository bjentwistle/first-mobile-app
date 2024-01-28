import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

export default function App() {
  const handleOnPress1 = () => console.log("First line pressed");
  const handleOnPress2 = () => console.log("Second line pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handleOnPress1}>
        This is my first mobile app
      </Text>
      <Text style={styles.text} onPress={handleOnPress2}>
        Hello World from Becky!
      </Text>
      <Image style={styles.logo} source={require("./assets/favicon.png")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerBlue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 16,
    padding: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  logo: {
    width: 66,
    height: 66,
  },
});
