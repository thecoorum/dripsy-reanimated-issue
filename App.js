import "expo-dev-client";

import { useCallback, useState } from "react";

import { DripsyProvider, makeTheme } from "dripsy";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";

import { DripsyAnimatedComponent } from "./src/DripsyAnimatedComponent";

const theme = makeTheme({
  space: {
    $1: 4,
    $2: 8,
  },
  colors: {
    $white: "#FFFFFF",
    $grey: "#454558",
  },
});

export default function App() {
  const [position, setPosition] = useState("center");

  const handleChangePosition = useCallback(() => {
    switch (position) {
      case "left":
        setPosition("center");
        break;
      case "center":
        setPosition("right");
        break;
      case "right":
        setPosition("left");
        break;
    }
  }, [position]);

  return (
    <DripsyProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <DripsyAnimatedComponent style={{ mb: "$2" }} position={position} />
        <Button title="Change position" onPress={handleChangePosition} />
      </View>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
