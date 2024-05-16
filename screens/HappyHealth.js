import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const HappyHealth = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.happyHealthIcon}
      resizeMode="cover"
      source={require("../assets/happyhealth.png")}
    >
      <View style={[styles.healthCare, styles.parmacyFlexBox]}>
        <View style={styles.icon}>
          <Image
            style={[styles.letter1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/letter-1.png")}
          />
          <Image
            style={styles.iconChild}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
        </View>
      </View>
      <Text style={[styles.happyHealth, styles.setting1FlexBox]}>
        Happy Health
      </Text>
      <View style={[styles.groupParent, styles.parmacyFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <View style={styles.talkingWithDoctor}>
          <Text style={[styles.talkingWithDoctor1, styles.setting1FlexBox]}>
            Talking with Doctor
          </Text>
          <Text
            style={[styles.talkToGeneral, styles.setting1Typo]}
          >{`Talk to general practitioners
and specialist`}</Text>
        </View>
      </View>
      <View style={[styles.menu, styles.menuLayout]}>
        <View style={[styles.setting, styles.homePosition]}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/settings-1.png")}
          />
          <Text style={[styles.setting1, styles.setting1Typo]}>Setting</Text>
        </View>
        <View style={[styles.article, styles.homePosition]}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/letter-1-1.png")}
          />
          <Text style={[styles.setting1, styles.setting1Typo]}>Articel</Text>
        </View>
        <View style={[styles.home, styles.homePosition]}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Text style={[styles.setting1, styles.setting1Typo]}>Home</Text>
        </View>
        <View style={[styles.hospital, styles.homePosition]}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
          <Text style={[styles.setting1, styles.setting1Typo]}>Hospital</Text>
        </View>
        <LinearGradient
          style={[styles.menuChild, styles.menuLayout]}
          locations={[0, 0.05, 0.28, 1]}
          colors={[
            "rgba(165, 203, 220, 0.15)",
            "rgba(161, 199, 215, 0.14)",
            "rgba(144, 177, 192, 0.11)",
            "rgba(219, 231, 236, 0.02)",
          ]}
        />
      </View>
      <View style={styles.menu1}>
        <Pressable
          style={[styles.chatWithDoctor, styles.seeAllFlexBox]}
          onPress={() => navigation.navigate("ChatWithDoc")}
        >
          <View style={styles.doctorLayout}>
            <Image
              style={[styles.doctor1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/doctor-1.png")}
            />
            <Image
              style={[styles.doctorChild, styles.doctorLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
          <Text style={[styles.setting1, styles.setting1Typo]}>{`Chat With
Doctor`}</Text>
        </Pressable>
        <View style={[styles.parmacy, styles.parmacyFlexBox]}>
          <Pressable
            style={styles.doctorLayout}
            onPress={() => navigation.navigate("Pharmacy")}
          >
            <Image
              style={[styles.doctorChild, styles.doctorLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-31.png")}
            />
            <Image
              style={[styles.pharmacy1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pharmacy-1.png")}
            />
          </Pressable>
          <Text style={[styles.setting1, styles.setting1Typo]}>Parmachy</Text>
        </View>
        <Pressable
          style={[styles.labMedicalService, styles.seeAllFlexBox]}
          onPress={() => navigation.navigate("LabAndMedicalService")}
        >
          <View style={styles.doctorLayout}>
            <Image
              style={[styles.doctorChild, styles.doctorLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.lab1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/lab-1.png")}
            />
          </View>
          <Text style={[styles.setting1, styles.setting1Typo]}>{`Lab & Medical
Service`}</Text>
        </Pressable>
        <View style={[styles.healthInsured, styles.healthPosition]}>
          <Pressable
            style={styles.doctorLayout}
            onPress={() => navigation.navigate("InsurancePlan")}
          >
            <Image
              style={[styles.doctorChild, styles.doctorLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-32.png")}
            />
            <Image
              style={[styles.healthInsurance1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/healthinsurance-1.png")}
            />
          </Pressable>
          <Text style={[styles.setting1, styles.setting1Typo]}>{`Helath
Insured`}</Text>
        </View>
        <View style={[styles.mentalHealth, styles.healthPosition]}>
          <View style={styles.doctorLayout}>
            <Image
              style={[styles.doctorChild, styles.doctorLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-33.png")}
            />
            <Image
              style={[styles.healthInsurance1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/selflove-1.png")}
            />
          </View>
          <Text style={[styles.setting1, styles.setting1Typo]}>{`Mental
Health`}</Text>
        </View>
        <View style={[styles.seeAll, styles.seeAllFlexBox]}>
          <View style={styles.doctorLayout}>
            <Image
              style={[styles.doctorChild, styles.doctorLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-34.png")}
            />
            <Image
              style={styles.grid1Icon}
              contentFit="cover"
              source={require("../assets/grid-1.png")}
            />
          </View>
          <Text style={[styles.setting1, styles.setting1Typo]}>{`See
All`}</Text>
        </View>
      </View>
      <View style={styles.designDoctor} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  parmacyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout1: {
    height: 40,
    width: 40,
  },
  setting1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  setting1Typo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.martelRegular,
  },
  menuLayout: {
    width: 414,
    position: "absolute",
  },
  homePosition: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  seeAllFlexBox: {
    height: 156,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 71,
    width: 71,
    top: 7,
    position: "absolute",
  },
  doctorLayout: {
    height: 85,
    width: 78,
  },
  healthPosition: {
    top: 200,
    height: 156,
    width: 83,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  letter1Icon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconChild: {
    left: 60,
    width: 45,
    height: 45,
    top: 0,
    position: "absolute",
  },
  icon: {
    width: 105,
    height: 45,
  },
  healthCare: {
    left: 261,
    width: 175,
    height: 53,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
  },
  happyHealth: {
    top: 10,
    left: 28,
    width: 258,
    height: 43,
    fontFamily: FontFamily.martelRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  frameChild: {
    width: 80,
    height: 83,
  },
  talkingWithDoctor1: {
    fontWeight: "700",
    fontFamily: FontFamily.martelBold,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  talkToGeneral: {
    top: 44,
    color: Color.colorDimgray_200,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  talkingWithDoctor: {
    width: 212,
    height: 94,
    marginLeft: 20,
  },
  groupParent: {
    top: 92,
    left: 37,
    flexDirection: "row",
    alignItems: "center",
  },
  setting1: {
    marginTop: 20,
    textAlign: "center",
    color: Color.colorBlack,
  },
  setting: {
    left: 338,
    width: 56,
  },
  article: {
    left: 235,
    width: 52,
    overflow: "hidden",
  },
  home: {
    left: 20,
    width: 47,
  },
  hospital: {
    left: 118,
    width: 65,
  },
  menuChild: {
    borderRadius: 15,
    height: 122,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  menu: {
    top: 590,
    left: 11,
    height: 120,
  },
  doctor1Icon: {
    borderRadius: 350,
    left: 3,
    width: 71,
    top: 7,
  },
  doctorChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  chatWithDoctor: {
    width: 83,
    height: 156,
    left: 0,
    top: 0,
  },
  pharmacy1Icon: {
    left: 4,
    width: 71,
    top: 7,
  },
  parmacy: {
    left: 122,
    width: 84,
    height: 131,
    top: 0,
  },
  lab1Icon: {
    borderRadius: 20,
    left: 3,
    width: 71,
    top: 7,
  },
  labMedicalService: {
    left: 243,
    width: 111,
    top: 0,
  },
  healthInsurance1Icon: {
    left: 3,
    width: 71,
    top: 7,
  },
  healthInsured: {
    left: 0,
  },
  mentalHealth: {
    left: 136,
  },
  grid1Icon: {
    top: 15,
    left: 10,
    width: 55,
    height: 55,
    position: "absolute",
  },
  seeAll: {
    top: 204,
    left: 271,
    width: 83,
    height: 156,
  },
  menu1: {
    top: 225,
    left: 61,
    width: 354,
    height: 360,
    position: "absolute",
  },
  designDoctor: {
    width: 320,
    height: 179,
  },
  happyHealthIcon: {
    flex: 1,
    width: "100%",
    height: 728,
    overflow: "hidden",
  },
});

export default HappyHealth;
