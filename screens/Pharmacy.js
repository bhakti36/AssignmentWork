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

const Pharmacy = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.pharmacyIcon}
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
          <Text style={[styles.pharmacy, styles.home1Typo]}>Pharmacy</Text>
        </View>
        <View style={[styles.homeParent, styles.parentFlexBox]}>
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Image
            style={[styles.check1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/check-1.png")}
          />
        </View>
      </Pressable>
      <View style={styles.popularProduct}>
        <View style={[styles.text, styles.textPosition1]}>
          <Text style={[styles.popularProduct1, styles.panadolTypo]}>
            Popular Product
          </Text>
          <Text style={[styles.seeAll, styles.seeAllTypo]}>See all</Text>
        </View>
        <View style={styles.drugs1Parent}>
          <View style={[styles.drugs1, styles.drugsLayout]}>
            <View style={[styles.drugs1Child, styles.drugs3ItemLayout]} />
            <Text style={[styles.panadol, styles.seeAllTypo]}>Panadol</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image6.png")}
            />
            <Text style={styles.text1}>$15.99</Text>
            <Text style={[styles.pcs, styles.pcsTypo]}>20pcs</Text>
            <Image
              style={[styles.component2Icon, styles.component2IconLayout]}
              contentFit="cover"
              source={require("../assets/component-2.png")}
            />
          </View>
          <View style={[styles.drugs2, styles.drugsLayout]}>
            <View style={[styles.drugs1Child, styles.drugs3ItemLayout]} />
            <Image
              style={[styles.imageIcon1, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image7.png")}
            />
            <Text style={[styles.panadol, styles.seeAllTypo]}>
              Bodrex Herbal
            </Text>
            <Text style={[styles.text2, styles.textPosition]}>$7.99</Text>
            <Text style={[styles.pcs, styles.pcsTypo]}>100ml</Text>
            <Image
              style={[styles.component2Icon1, styles.component2IconLayout]}
              contentFit="cover"
              source={require("../assets/component-2.png")}
            />
          </View>
          <View style={[styles.drugs3, styles.drugsLayout]}>
            <View style={[styles.drugs1Child, styles.drugs3ItemLayout]} />
            <Image
              style={[styles.imageIcon2, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image8.png")}
            />
            <Text style={[styles.panadol, styles.seeAllTypo]}>Konidin</Text>
            <Text style={[styles.text2, styles.textPosition]}>$5.99</Text>
            <Text style={[styles.pcs, styles.pcsTypo]}>3pcs</Text>
            <Image
              style={[styles.component2Icon1, styles.component2IconLayout]}
              contentFit="cover"
              source={require("../assets/component-2.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.productOnSale}>
        <View style={[styles.drugs31, styles.drugsPosition]}>
          <View style={[styles.drugs3Item, styles.drugs3ItemLayout]} />
          <Image
            style={[styles.imageIcon3, styles.imageIconLayout]}
            contentFit="cover"
            source={require("../assets/image8.png")}
          />
          <Text style={[styles.bodrexin, styles.seeAllTypo]}>Bodrexin</Text>
          <Text style={[styles.text4, styles.textTypo]}>$7.99</Text>
          <Text style={[styles.text5, styles.ml1Clr]}>$8.99</Text>
          <View style={[styles.drugs3Inner, styles.innerPosition]} />
          <Text style={[styles.ml1, styles.ml1Clr]}>75ml</Text>
          <Image
            style={[styles.component2Icon1, styles.component2IconLayout]}
            contentFit="cover"
            source={require("../assets/component-2.png")}
          />
        </View>
        <View style={[styles.drugs21, styles.drugsPosition]}>
          <View style={[styles.drugs3Item, styles.drugs3ItemLayout]} />
          <Image
            style={[styles.imageIcon4, styles.imageIconLayout1]}
            contentFit="cover"
            source={require("../assets/image9.png")}
          />
          <Text style={[styles.bodrexin, styles.seeAllTypo]}>Betadine</Text>
          <Text style={[styles.text4, styles.textTypo]}>$6.99</Text>
          <Text style={[styles.text5, styles.ml1Clr]}>$8.99</Text>
          <View style={[styles.drugs2Inner, styles.innerPosition]} />
          <Text style={[styles.ml1, styles.ml1Clr]}>50ml</Text>
          <Image
            style={[styles.component2Icon1, styles.component2IconLayout]}
            contentFit="cover"
            source={require("../assets/component-2.png")}
          />
        </View>
        <View style={[styles.drugs11, styles.drugsPosition]}>
          <View style={[styles.drugs3Item, styles.drugs3ItemLayout]} />
          <Image
            style={styles.imageIcon5}
            contentFit="cover"
            source={require("../assets/image10.png")}
          />
          <Text style={[styles.bodrexin, styles.seeAllTypo]}>OBH Combi</Text>
          <Text style={[styles.text4, styles.textTypo]}>$9.99</Text>
          <Text style={[styles.text5, styles.ml1Clr]}>$10.99</Text>
          <View style={[styles.drugs3Inner, styles.innerPosition]} />
          <Text style={[styles.ml1, styles.ml1Clr]}>75ml</Text>
          <Image
            style={[styles.component2Icon1, styles.component2IconLayout]}
            contentFit="cover"
            source={require("../assets/component-2.png")}
          />
        </View>
        <View style={[styles.text, styles.textPosition1]}>
          <Text style={[styles.popularProduct1, styles.panadolTypo]}>
            Product on Sale
          </Text>
          <Text style={[styles.seeAll, styles.seeAllTypo]}>See all</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  textPosition1: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  panadolTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  seeAllTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  drugsLayout: {
    width: 118,
    height: 165,
    top: 0,
    position: "absolute",
  },
  drugs3ItemLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: 11,
    width: 118,
    height: 165,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pcsTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
  },
  component2IconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  imageIconLayout1: {
    height: 74,
    width: 74,
    left: 22,
    position: "absolute",
  },
  textPosition: {
    top: 140,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  imageIconLayout: {
    height: 66,
    width: 66,
    top: 17,
    position: "absolute",
  },
  drugsPosition: {
    top: 34,
    width: 118,
    height: 165,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  ml1Clr: {
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  innerPosition: {
    height: 1,
    backgroundColor: Color.colorDimgray_100,
    left: 52,
    top: 149,
    position: "absolute",
  },
  pharmacy: {
    display: "flex",
    width: 162,
    marginLeft: 10,
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
  },
  arrow1Parent: {
    left: 0,
  },
  home1: {
    textAlign: "left",
  },
  check1Icon: {
    marginLeft: 10,
  },
  homeParent: {
    left: 278,
  },
  home: {
    top: 20,
    left: 20,
    width: 374,
    height: 40,
    position: "absolute",
  },
  popularProduct1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  seeAll: {
    top: 2,
    left: 260,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDodgerblue_100,
  },
  text: {
    width: 300,
    height: 24,
    left: 0,
  },
  drugs1Child: {
    borderColor: Color.colorDodgerblue_200,
  },
  panadol: {
    top: 104,
    left: 8,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  imageIcon: {
    top: 21,
    width: 58,
    height: 58,
    left: 30,
    position: "absolute",
  },
  text1: {
    top: 138,
    fontSize: FontSize.size_sm,
    left: 8,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  pcs: {
    top: 119,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_500,
    left: 8,
    textAlign: "left",
    position: "absolute",
  },
  component2Icon: {
    top: 137,
    left: 93,
  },
  drugs1: {
    left: 0,
  },
  imageIcon1: {
    top: 8,
  },
  text2: {
    left: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 140,
  },
  component2Icon1: {
    top: 139,
    left: 92,
  },
  drugs2: {
    left: 139,
  },
  imageIcon2: {
    left: 26,
  },
  drugs3: {
    left: 274,
  },
  drugs1Parent: {
    top: 44,
    height: 165,
    width: 392,
    left: 0,
    position: "absolute",
  },
  popularProduct: {
    top: 154,
    height: 209,
    width: 392,
    left: 36,
    position: "absolute",
  },
  drugs3Item: {
    borderColor: Color.colorDodgerblue_300,
  },
  imageIcon3: {
    left: 30,
  },
  bodrexin: {
    top: 106,
    left: 8,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  text4: {
    left: 7,
    top: 140,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  text5: {
    top: 144,
    left: 53,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  drugs3Inner: {
    width: 29,
  },
  ml1: {
    top: 121,
    fontFamily: FontFamily.interMedium,
    left: 7,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
  },
  drugs31: {
    left: 270,
  },
  imageIcon4: {
    top: 12,
  },
  drugs2Inner: {
    width: 25,
  },
  drugs21: {
    left: 135,
  },
  imageIcon5: {
    top: 18,
    left: 25,
    width: 68,
    height: 68,
    position: "absolute",
  },
  drugs11: {
    left: 0,
  },
  productOnSale: {
    top: 407,
    width: 388,
    height: 199,
    left: 36,
    position: "absolute",
  },
  pharmacyIcon: {
    flex: 1,
    width: "100%",
    height: 728,
    overflow: "hidden",
  },
});

export default Pharmacy;
