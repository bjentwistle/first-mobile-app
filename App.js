import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import MapView, { EsriBasemaps } from "react-native-maps"; // Import the MapView component from the ArcGIS Runtime SDK for React Native

import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  TouchableNativeFeedback,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const orientation = useDeviceOrientation();
  console.log("orientation is:", orientation);

  //supposedly the lat and long but seems wrong!
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    console.log("The long and lat", locationX, locationY);
  };

  useEffect(() => {
    // Set API key (Note: replace 'API_KEY' with your actual API key)
    const apiKey = process.env.API_KEY;
    process.env.ESRI_ACCESS_TOKEN = apiKey;

    // Your map configuration
    const mapConfig = {
      basemap: "topo-vector", // Basemap layer
      center: [-118.805, 34.027],
      zoom: 13, // Zoom level
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableHighlight onPress={handlePress} style={styles.touchable}>
          <MapView
            style={styles.map}
            // mapType="satellite" // Basemap type centered on Edinburgh
            mapType={EsriBasemaps.World_Shaded_Relief}
            initialRegion={{
              latitude: 55.953251,
              longitude: -3.188267,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </TouchableHighlight>
      </View>
      <Separator />

      <View>
        <Text style={styles.text}>Satellite Display of a map</Text>
      </View>

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
  map: {
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100%",
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
