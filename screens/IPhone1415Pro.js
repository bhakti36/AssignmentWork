import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const IPhone1415Pro = () => {
  return (
    <View style={styles.iphone1415Pro1}>
      <View style={styles.iphone1415Pro1Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Pro1Child: {
    position: "absolute",
    top: 49,
    left: 26,
    backgroundColor: "#d9d9d9",
    width: 342,
    height: 154,
  },
  iphone1415Pro1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro;
