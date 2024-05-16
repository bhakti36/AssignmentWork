import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const InsurancePlan = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.insurancePlanIcon}
      resizeMode="cover"
      source={require("../assets/happyhealth.png")}
    >
      <Pressable
        style={styles.home}
        onPress={() => navigation.navigate("HappyHealth")}
      >
        <View style={[styles.arrow1Parent, styles.parentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
          <Text style={[styles.insurence, styles.home1Typo]}>Insurence</Text>
        </View>
        <View style={[styles.homeParent, styles.parentFlexBox]}>
          <Text style={styles.home1Typo}>Home</Text>
          <Image
            style={[styles.check1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/check-1.png")}
          />
        </View>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  home1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
  },
  iconLayout: {
    width: 40,
    height: 40,
  },
  insurence: {
    display: "flex",
    width: 162,
    marginLeft: 10,
    alignItems: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
  },
  arrow1Parent: {
    left: 0,
  },
  check1Icon: {
    marginLeft: 10,
  },
  homeParent: {
    left: 278,
  },
  home: {
    top: 26,
    left: 70,
    width: 374,
    height: 40,
    position: "absolute",
  },
  insurancePlanIcon: {
    flex: 1,
    width: "100%",
    height: 728,
    overflow: "hidden",
  },
});

export default InsurancePlan;
