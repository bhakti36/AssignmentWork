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
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LabAndMedicalService = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.labAndMedicalService}
      resizeMode="cover"
      source={require("../assets/happyhealth.png")}
    >
      <View style={styles.home}>
        <View style={[styles.arrow1Parent, styles.parentFlexBox]}>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
          <Text
            style={[styles.labMedical, styles.medicalTypo]}
          >{`Lab & Medical Service`}</Text>
        </View>
        <View style={[styles.homeParent, styles.parentFlexBox]}>
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Image
            style={[styles.check1Icon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/check-1.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.home}
        onPress={() => navigation.navigate("HappyHealth")}
      >
        <View style={[styles.arrow1Parent, styles.parentFlexBox]}>
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
          <Text
            style={[styles.labMedical, styles.medicalTypo]}
          >{`Lab & Medical Service`}</Text>
        </View>
        <View style={[styles.homeParent, styles.parentFlexBox]}>
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Image
            style={[styles.check1Icon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/check-1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.magnifyingGlass1Parent, styles.parentFlexBox]}>
          <Image
            style={styles.magnifyingGlass1Icon}
            contentFit="cover"
            source={require("../assets/magnifyingglass-1.png")}
          />
          <Text
            style={[styles.searchProseduresOr, styles.varietyOfMedicalTypo]}
          >
            Search prosedures or hospital
          </Text>
        </View>
      </View>
      <View style={[styles.medicalSerice, styles.medicalLayout]}>
        <Text style={[styles.varietyOfMedical, styles.varietyOfMedicalTypo]}>
          Variety of medical services for you
        </Text>
        <Text style={[styles.medicalServiceCategories, styles.medicalLayout]}>
          Medical Service categories
        </Text>
      </View>
      <View style={styles.labTestParent}>
        <View style={[styles.labTest, styles.parentFlexBox]}>
          <View style={styles.homeLayout}>
            <Text style={[styles.homeCare, styles.homeTypo]}>HOME CARE</Text>
            <Image
              style={[styles.lab2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/lab-2.png")}
            />
            <Image
              style={[styles.homeCare2Child, styles.homeLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <Text style={[styles.labTest1, styles.covid19SpaceBlock]}>
            Lab Test
          </Text>
        </View>
        <View style={[styles.covidTest, styles.covidTestPosition]}>
          <View style={styles.homeLayout}>
            <Text style={[styles.homeCare1, styles.homeTypo]}>HOME CARE</Text>
            <Image
              style={[styles.rapidTest1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rapidtest-1.png")}
            />
            <Image
              style={[styles.homeCare2Child, styles.homeLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <Text style={[styles.covid19, styles.covid19SpaceBlock]}>{`Covid - 19
Test`}</Text>
        </View>
        <View style={[styles.dental, styles.parentFlexBox]}>
          <View style={styles.homeLayout}>
            <Image
              style={[styles.dentalCheckup1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/dentalcheckup-1.png")}
            />
            <Image
              style={[styles.homeCare2Child, styles.homeLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-8.png")}
            />
          </View>
          <Text style={[styles.covid19, styles.covid19SpaceBlock]}>{`Dental
Treatment`}</Text>
        </View>
        <View style={[styles.medicalCheckUp, styles.parentFlexBox]}>
          <View style={styles.homeLayout}>
            <Text style={[styles.homeCare3, styles.homeTypo]}>HOME CARE</Text>
            <Image
              style={[styles.examination1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/examination-1.png")}
            />
            <Image
              style={[styles.homeCare2Child, styles.homeLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <Text style={[styles.covid19, styles.covid19SpaceBlock]}>{`Medical
Check-Up`}</Text>
        </View>
        <View style={[styles.nutritionProgram, styles.covidTestPosition]}>
          <View style={styles.homeLayout}>
            <Image
              style={[styles.schedule1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/schedule-1.png")}
            />
            <Image
              style={[styles.homeCare2Child, styles.homeLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-11.png")}
            />
          </View>
          <Text style={[styles.labTest1, styles.covid19SpaceBlock]}>{`Nutrition
Program`}</Text>
        </View>
        <View style={[styles.bestPackage, styles.parentFlexBox]}>
          <View style={styles.homeLayout}>
            <Text style={[styles.homeCare, styles.homeTypo]}>HOME CARE</Text>
            <Image
              style={[styles.firstAidBox1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/firstaidbox-1.png")}
            />
            <Image
              style={[styles.homeCare2Child, styles.homeLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
          <Text style={[styles.bestPackages, styles.covid19SpaceBlock]}>{`Best
Packages`}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  medicalTypo: {
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
    alignItems: "center",
  },
  home1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.martelRegular,
  },
  iconLayout3: {
    width: 40,
    height: 40,
  },
  frameLayout: {
    height: 35,
    width: 374,
    position: "absolute",
  },
  varietyOfMedicalTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.martelLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  medicalLayout: {
    width: 201,
    position: "absolute",
  },
  homeTypo: {
    top: 58,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    position: "absolute",
  },
  iconLayout1: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  homeLayout: {
    height: 85,
    width: 78,
  },
  covid19SpaceBlock: {
    marginTop: 10,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  covidTestPosition: {
    left: 180,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 57,
    width: 57,
    position: "absolute",
  },
  labMedical: {
    width: 162,
    marginLeft: 10,
  },
  arrow1Parent: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  home1: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  check1Icon: {
    marginLeft: 10,
  },
  homeParent: {
    left: 278,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
  },
  home: {
    top: 20,
    height: 40,
    width: 374,
    left: 20,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: "#f2f2f2",
    left: 0,
    top: 0,
  },
  magnifyingGlass1Icon: {
    width: 15,
    height: 15,
  },
  searchProseduresOr: {
    textAlign: "center",
    marginLeft: 10,
  },
  magnifyingGlass1Parent: {
    top: 9,
    flexDirection: "row",
    alignItems: "center",
    left: 20,
  },
  frame: {
    top: 83,
    left: 54,
  },
  varietyOfMedical: {
    top: 27,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  medicalServiceCategories: {
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    left: 0,
    top: 0,
  },
  medicalSerice: {
    top: 141,
    left: 131,
    height: 44,
  },
  homeCare: {
    left: 9,
  },
  lab2Icon: {
    left: 17,
    top: 3,
    height: 50,
    width: 50,
  },
  homeCare2Child: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  labTest1: {
    textAlign: "center",
    fontFamily: FontFamily.martelRegular,
    marginTop: 10,
  },
  labTest: {
    top: 22,
    left: 76,
  },
  homeCare1: {
    left: 10,
  },
  rapidTest1Icon: {
    top: 6,
    left: 15,
  },
  covid19: {
    textAlign: "left",
    fontFamily: FontFamily.martelRegular,
  },
  covidTest: {
    top: 19,
  },
  dentalCheckup1Icon: {
    top: 13,
    left: 10,
  },
  dental: {
    top: 15,
    left: 293,
  },
  homeCare3: {
    left: 8,
  },
  examination1Icon: {
    left: 18,
    top: 3,
    height: 50,
    width: 50,
  },
  medicalCheckUp: {
    top: 160,
    left: 77,
    width: 78,
  },
  schedule1Icon: {
    top: 12,
    left: 9,
  },
  nutritionProgram: {
    top: 163,
    width: 78,
  },
  firstAidBox1Icon: {
    top: 4,
    left: 16,
  },
  bestPackages: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  bestPackage: {
    top: 170,
    left: 284,
  },
  labTestParent: {
    top: 271,
    width: 438,
    height: 319,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  labAndMedicalService: {
    flex: 1,
    width: "100%",
    height: 728,
    overflow: "hidden",
  },
});

export default LabAndMedicalService;
