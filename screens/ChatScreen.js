import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.chatScreenIcon}
      resizeMode="cover"
      source={require("../assets/happyhealth.png")}
    >
      <View style={[styles.doctor6, styles.doctor6Layout]}>
        <View style={[styles.rectangleParent, styles.doctor6Layout]}>
          <View style={styles.groupChild} />
          <View style={styles.imageParent}>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image5.png")}
            />
            <Text style={[styles.chardiologist, styles.mAwayTypo]}>
              Chardiologist
            </Text>
            <View style={styles.iconlyboldlocationParent}>
              <Image
                style={[styles.iconlyboldlocation, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/iconlyboldlocation5.png")}
              />
              <Text style={[styles.mAway, styles.mAwayTypo]}>800m away</Text>
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.groupItem} />
              <Image
                style={[styles.iconlyboldstar, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/iconlyboldstar5.png")}
              />
              <Text style={[styles.text, styles.textClr]}>4.7</Text>
            </View>
            <Text style={styles.drRishi}>Dr. Rishi</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.loremIpsumDolorContainer, styles.textPosition]}>
        <Text
          style={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut laore et dolore magna aliqua. Ut enim ad minim veniam... `}</Text>
        <Text style={[styles.readMore, styles.textClr]}>Read more</Text>
      </Text>
      <View style={[styles.fluentchat16Filled, styles.textPosition]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
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
          <Text style={[styles.chatWithDoctor, styles.home1Typo]}>
            Chat with Doctor
          </Text>
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
  doctor6Layout: {
    height: 124,
    width: 300,
    position: "absolute",
  },
  mAwayTypo: {
    color: Color.colorGray_500,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.colorDodgerblue_100,
    fontWeight: "500",
  },
  textPosition: {
    left: 20,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  home1Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  iconLayout: {
    width: 40,
    height: 40,
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    height: 114,
    left: 0,
    top: 0,
    width: 300,
    position: "absolute",
  },
  imageIcon: {
    width: 96,
    height: 96,
    left: 0,
    top: 0,
    position: "absolute",
  },
  chardiologist: {
    top: 30,
    width: 82,
    height: 15,
    textAlign: "left",
    left: 111,
  },
  iconlyboldlocation: {
    height: "40.27%",
    width: "23.33%",
    top: "59.73%",
    right: "42.92%",
    left: "33.75%",
    bottom: "0%",
  },
  mAway: {
    textAlign: "left",
    left: 0,
    top: 0,
  },
  iconlyboldlocationParent: {
    height: "31.88%",
    width: "25.53%",
    top: "68.12%",
    right: "29.43%",
    left: "45.04%",
    bottom: "0%",
    position: "absolute",
  },
  groupItem: {
    borderRadius: 2,
    backgroundColor: Color.colorDodgerblue_400,
    width: 41,
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconlyboldstar: {
    height: "41.29%",
    width: "27.59%",
    top: "58.43%",
    right: "-0.16%",
    bottom: "0.28%",
    left: "72.58%",
  },
  text: {
    top: 2,
    fontFamily: FontFamily.interMedium,
    left: 20,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  rectangleGroup: {
    top: 54,
    width: 61,
    height: 36,
    left: 111,
    position: "absolute",
  },
  drRishi: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_100,
    width: 171,
    textAlign: "left",
    left: 111,
    top: 0,
    position: "absolute",
  },
  imageParent: {
    top: 9,
    left: 9,
    width: 282,
    height: 115,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  doctor6: {
    top: 67,
    left: 19,
  },
  loremIpsumDolor: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
  },
  readMore: {
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDodgerblue_100,
  },
  loremIpsumDolorContainer: {
    top: 198,
    lineHeight: 20,
    width: 260,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 20,
    height: 96,
  },
  fluentchat16Filled: {
    top: 321,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "7.47%",
    width: "16.26%",
    top: "47.51%",
    right: "78.12%",
    bottom: "45.01%",
    left: "5.62%",
  },
  chatWithDoctor: {
    display: "flex",
    width: 162,
    marginLeft: 10,
    alignItems: "center",
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
    left: -7,
    width: 374,
    height: 40,
    top: 0,
    position: "absolute",
  },
  chatScreenIcon: {
    flex: 1,
    width: "100%",
    height: 728,
    overflow: "hidden",
  },
});

export default ChatScreen;
