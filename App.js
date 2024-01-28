import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const handleOnPress1 = () => console.log("First line pressed");
  const handleOnPress2 = () => console.log("Second line pressed");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableHighlight onPress={() => console.log("Image pressed")}>
          <Image
            style={styles.image}
            source={{
              uri: "https://picsum.photos/200",
            }}
          />
        </TouchableHighlight>
      </View>
      <Separator />
      <View>
        <Text style={styles.text} onPress={handleOnPress1}>
          This is my first mobile app
        </Text>
        <Text style={styles.text} onPress={handleOnPress2}>
          Hello World from Becky!
        </Text>
      </View>
      <Separator />
      <View>
        <Image style={styles.logo} source={require("./assets/favicon.png")} />
      </View>
      <Separator />
      <Button
        title="Click Me"
        accessibilityLabel="Click me"
        onPress={() => Alert.alert("Button clicked")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    // alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  text: {
    marginTop: 16,
    padding: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#20232a",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  logo: {
    alignSelf: "center",
    width: 66,
    height: 66,
  },
  separator: {
    margin: 8,
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
  },
});
