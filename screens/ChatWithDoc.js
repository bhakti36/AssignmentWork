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
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ChatWithDoc = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.chatWithDoc}
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
          <Text style={styles.pharmacy}>Pharmacy</Text>
        </View>
        <View style={[styles.homeParent, styles.parentFlexBox]}>
          <Text style={styles.home1}>Home</Text>
          <Image
            style={[styles.check1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/check-1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.groupParent, styles.groupParentPosition1]}>
        <View style={[styles.buttonParent, styles.buttonLayout]}>
          <Image
            style={[styles.buttonIcon, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/button.png")}
          />
          <Text style={styles.topDoctors}>Top Doctors</Text>
        </View>
        <View style={[styles.doctor1, styles.doctor1Layout]}>
          <View style={[styles.rectangleParent, styles.doctor1Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation,
                    styles.iconlyboldstarLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View style={[styles.rectangleGroup, styles.groupParentPosition]}>
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[styles.iconlyboldstar, styles.iconlyboldstarPosition]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drRishi, styles.drRishiTypo]}>
                Dr. Rishi
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor2, styles.doctor2Layout]}>
          <View style={[styles.rectangleContainer, styles.doctor2Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageGroup, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image1.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Dentists
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationGroup,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation1,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation1.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View style={[styles.groupView, styles.groupParentPosition]}>
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar1,
                    styles.iconlyboldstarPosition1,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar1.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Vaamana
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor3, styles.doctor3Layout]}>
          <View style={[styles.rectangleParent1, styles.doctor3Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageContainer, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Orthopaedic
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationContainer,
                  styles.iconlyboldstarPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation2,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation2.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent2, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar2,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar2.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Nallarasi
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor4, styles.doctor4Layout]}>
          <View style={[styles.rectangleParent3, styles.doctor4Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent1, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image3.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent1,
                  styles.iconlyboldstarPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation3,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation3.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent4, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar3,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar3.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Nihal
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor5, styles.doctor5Layout]}>
          <View style={[styles.rectangleParent5, styles.doctor5Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent2, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image4.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent2,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation4,
                    styles.iconlyboldstar4Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation4.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent6, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar4,
                    styles.iconlyboldstar4Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar4.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drRishi, styles.drRishiTypo]}>
                Dr. Rishita
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.topBarWrapper, styles.groupParentPosition1]}>
          <View style={[styles.topBarWrapper, styles.groupParentPosition1]}>
            <View style={styles.frameParent}>
              <View style={[styles.wrapper, styles.text5Position]}>
                <Text style={[styles.text5, styles.text5Position]}>9:40</Text>
              </View>
              <View style={styles.cellularConnectionParent}>
                <Image
                  style={styles.cellularConnectionIcon}
                  contentFit="cover"
                  source={require("../assets/cellular-connection.png")}
                />
                <Image
                  style={styles.cellularConnectionIcon}
                  contentFit="cover"
                  source={require("../assets/wifi.png")}
                />
                <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                  <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                    <View style={[styles.border, styles.borderBorder]} />
                    <Image
                      style={[styles.capIcon, styles.capIconPosition]}
                      contentFit="cover"
                      source={require("../assets/cap.png")}
                    />
                    <View style={styles.capacity} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupParentPosition1]}>
        <View style={[styles.buttonParent, styles.buttonLayout]}>
          <Image
            style={[styles.buttonIcon, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/button.png")}
          />
          <Text style={styles.topDoctors}>Top Doctors</Text>
        </View>
        <View style={[styles.doctor1, styles.doctor1Layout]}>
          <View style={[styles.rectangleParent, styles.doctor1Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation,
                    styles.iconlyboldstarLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View style={[styles.rectangleGroup, styles.groupParentPosition]}>
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[styles.iconlyboldstar, styles.iconlyboldstarPosition]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drRishi, styles.drRishiTypo]}>
                Dr. Rishi
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor2, styles.doctor2Layout]}>
          <View style={[styles.rectangleContainer, styles.doctor2Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageGroup, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image1.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Dentists
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationGroup,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation1,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation1.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View style={[styles.groupView, styles.groupParentPosition]}>
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar1,
                    styles.iconlyboldstarPosition1,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar1.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Vaamana
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor3, styles.doctor3Layout]}>
          <View style={[styles.rectangleParent1, styles.doctor3Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageContainer, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Orthopaedic
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationContainer,
                  styles.iconlyboldstarPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation2,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation2.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent2, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar2,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar2.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Nallarasi
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor4, styles.doctor4Layout]}>
          <View style={[styles.rectangleParent3, styles.doctor4Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent1, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image3.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent1,
                  styles.iconlyboldstarPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation3,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation3.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent4, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar3,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar3.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Nihal
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor5, styles.doctor5Layout]}>
          <View style={[styles.rectangleParent5, styles.doctor5Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent2, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image4.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent2,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation4,
                    styles.iconlyboldstar4Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation4.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent6, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar4,
                    styles.iconlyboldstar4Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar4.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drRishi, styles.drRishiTypo]}>
                Dr. Rishita
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.topBarWrapper, styles.groupParentPosition1]}>
          <View style={[styles.topBarWrapper, styles.groupParentPosition1]}>
            <View style={styles.frameParent}>
              <View style={[styles.wrapper, styles.text5Position]}>
                <Text style={[styles.text5, styles.text5Position]}>9:40</Text>
              </View>
              <View style={styles.cellularConnectionParent}>
                <Image
                  style={styles.cellularConnectionIcon}
                  contentFit="cover"
                  source={require("../assets/cellular-connection.png")}
                />
                <Image
                  style={styles.cellularConnectionIcon}
                  contentFit="cover"
                  source={require("../assets/wifi.png")}
                />
                <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                  <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                    <View style={[styles.border, styles.borderBorder]} />
                    <Image
                      style={[styles.capIcon, styles.capIconPosition]}
                      contentFit="cover"
                      source={require("../assets/cap.png")}
                    />
                    <View style={styles.capacity} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupParentPosition1]}>
        <View style={[styles.buttonParent, styles.buttonLayout]}>
          <Image
            style={[styles.buttonIcon, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/button.png")}
          />
          <Text style={styles.topDoctors}>Top Doctors</Text>
        </View>
        <Pressable
          style={[styles.doctor1, styles.doctor1Layout]}
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <View style={[styles.rectangleParent, styles.doctor1Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation,
                    styles.iconlyboldstarLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View style={[styles.rectangleGroup, styles.groupParentPosition]}>
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[styles.iconlyboldstar, styles.iconlyboldstarPosition]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drRishi, styles.drRishiTypo]}>
                Dr. Rishi
              </Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.doctor2, styles.doctor2Layout]}>
          <View style={[styles.rectangleContainer, styles.doctor2Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageGroup, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image1.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Dentists
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationGroup,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation1,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation1.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View style={[styles.groupView, styles.groupParentPosition]}>
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar1,
                    styles.iconlyboldstarPosition1,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar1.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Vaamana
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor3, styles.doctor3Layout]}>
          <View style={[styles.rectangleParent1, styles.doctor3Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageContainer, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Orthopaedic
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationContainer,
                  styles.iconlyboldstarPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation2,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation2.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent2, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar2,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar2.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Nallarasi
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor4, styles.doctor4Layout]}>
          <View style={[styles.rectangleParent3, styles.doctor4Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent1, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image3.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent1,
                  styles.iconlyboldstarPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation3,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation3.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent4, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar3,
                    styles.iconlyboldstarPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar3.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drVaamana, styles.drRishiTypo]}>
                Dr. Nihal
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.doctor5, styles.doctor5Layout]}>
          <View style={[styles.rectangleParent5, styles.doctor5Layout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent2, styles.imageParentPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image4.png")}
              />
              <Text style={[styles.chardiologist, styles.textTypo]}>
                Chardiologist
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent2,
                  styles.iconlyboldlocationParentPosition,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation4,
                    styles.iconlyboldstar4Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation4.png")}
                />
                <Text style={[styles.mAway, styles.mAwayPosition]}>
                  800m away
                </Text>
              </View>
              <View
                style={[styles.rectangleParent6, styles.groupParentPosition]}
              >
                <View style={[styles.groupItem, styles.mAwayPosition]} />
                <Image
                  style={[
                    styles.iconlyboldstar4,
                    styles.iconlyboldstar4Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldstar4.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>4.7</Text>
              </View>
              <Text style={[styles.drRishi, styles.drRishiTypo]}>
                Dr. Rishita
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.topBarWrapper, styles.groupParentPosition1]}>
          <View style={[styles.topBarWrapper, styles.groupParentPosition1]}>
            <View style={styles.frameParent}>
              <View style={[styles.wrapper, styles.text5Position]}>
                <Text style={[styles.text5, styles.text5Position]}>9:40</Text>
              </View>
              <View style={styles.cellularConnectionParent}>
                <Image
                  style={styles.cellularConnectionIcon}
                  contentFit="cover"
                  source={require("../assets/cellular-connection.png")}
                />
                <Image
                  style={styles.cellularConnectionIcon}
                  contentFit="cover"
                  source={require("../assets/wifi.png")}
                />
                <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                  <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                    <View style={[styles.border, styles.borderBorder]} />
                    <Image
                      style={[styles.capIcon, styles.capIconPosition]}
                      contentFit="cover"
                      source={require("../assets/cap.png")}
                    />
                    <View style={styles.capacity} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    height: 40,
  },
  groupParentPosition1: {
    width: 458,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 27,
    position: "absolute",
  },
  doctor1Layout: {
    height: 127,
    width: 382,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  imageParentPosition: {
    width: 359,
    left: 11,
    top: 6,
    position: "absolute",
  },
  textTypo: {
    height: 10,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  iconlyboldlocationParentPosition: {
    left: "36.82%",
    right: "29.43%",
    width: "33.75%",
  },
  iconlyboldstarLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
  },
  mAwayPosition: {
    height: 12,
    top: 0,
    position: "absolute",
  },
  groupParentPosition: {
    width: 58,
    left: 136,
    top: 37,
    position: "absolute",
  },
  iconlyboldstarPosition: {
    bottom: "0%",
    position: "absolute",
  },
  drRishiTypo: {
    width: 218,
    left: 141,
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  doctor2Layout: {
    height: 160,
    width: 382,
    position: "absolute",
  },
  iconlyboldstarPosition1: {
    right: "72.79%",
    width: "27.21%",
  },
  doctor3Layout: {
    height: 193,
    width: 382,
    position: "absolute",
  },
  doctor4Layout: {
    height: 226,
    width: 382,
    position: "absolute",
  },
  doctor5Layout: {
    height: 259,
    width: 382,
    position: "absolute",
  },
  iconlyboldstar4Position: {
    bottom: "-0.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  text5Position: {
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  pharmacy: {
    width: 162,
    marginLeft: 10,
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
    alignItems: "center",
  },
  arrow1Parent: {
    left: 0,
  },
  home1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelRegular,
    fontSize: FontSize.size_mini,
  },
  check1Icon: {
    marginLeft: 10,
  },
  homeParent: {
    left: 278,
  },
  home: {
    top: 19,
    width: 374,
    height: 40,
    left: 38,
    position: "absolute",
  },
  buttonIcon: {
    width: 51,
    left: 0,
    top: 0,
  },
  topDoctors: {
    top: 8,
    left: 130,
    width: 123,
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorGray_100,
    position: "absolute",
  },
  buttonParent: {
    top: 44,
    width: 253,
    left: 38,
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGray_400,
    height: 78,
    width: 382,
    borderStyle: "solid",
    left: 0,
  },
  imageIcon: {
    width: 122,
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
  },
  chardiologist: {
    top: 20,
    width: 104,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsMedium,
    left: 141,
    height: 10,
  },
  iconlyboldlocation: {
    height: "17.85%",
    top: "82.3%",
    bottom: "-0.15%",
    right: "87.04%",
    width: "12.96%",
    position: "absolute",
  },
  mAway: {
    left: 30,
    width: 92,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    height: 12,
    textAlign: "left",
  },
  iconlyboldlocationParent: {
    height: "56.08%",
    top: "43.84%",
    bottom: "0.08%",
    position: "absolute",
  },
  groupItem: {
    left: 6,
    borderRadius: 2,
    backgroundColor: Color.colorDodgerblue_400,
    width: 52,
  },
  iconlyboldstar: {
    height: "18.97%",
    top: "81.03%",
    right: "72.79%",
    width: "27.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
  },
  text: {
    top: 1,
    left: 31,
    fontFamily: FontFamily.interMedium,
    color: Color.colorDodgerblue_100,
    width: 23,
  },
  rectangleGroup: {
    height: 64,
  },
  drRishi: {
    color: Color.colorGray_100,
    width: 218,
  },
  imageParent: {
    height: 121,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  doctor1: {
    top: 92,
    left: 38,
  },
  iconlyboldlocation1: {
    height: "11.98%",
    top: "88.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    right: "87.04%",
    width: "12.96%",
  },
  iconlyboldlocationGroup: {
    height: "65.58%",
    top: "34.48%",
    bottom: "-0.06%",
    position: "absolute",
  },
  iconlyboldstar1: {
    height: "12.49%",
    top: "87.62%",
    bottom: "-0.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  groupView: {
    height: 97,
  },
  drVaamana: {
    color: Color.colorGray_200,
  },
  imageGroup: {
    height: 154,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  doctor2: {
    top: 183,
    left: 38,
  },
  iconlyboldlocation2: {
    height: "9.02%",
    top: "90.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    right: "87.04%",
    width: "12.96%",
  },
  iconlyboldlocationContainer: {
    height: "71.67%",
    top: "28.33%",
    left: "36.82%",
    right: "29.43%",
    width: "33.75%",
  },
  iconlyboldstar2: {
    height: "9.31%",
    top: "90.69%",
    right: "72.79%",
    width: "27.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
  },
  rectangleParent2: {
    height: 130,
  },
  imageContainer: {
    height: 187,
  },
  rectangleParent1: {
    left: 0,
    top: 0,
  },
  doctor3: {
    top: 274,
    left: 38,
  },
  iconlyboldlocation3: {
    height: "7.24%",
    top: "92.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    right: "87.04%",
    width: "12.96%",
  },
  iconlyboldlocationParent1: {
    height: "75.9%",
    top: "24.1%",
    left: "36.82%",
    right: "29.43%",
    width: "33.75%",
  },
  iconlyboldstar3: {
    height: "7.42%",
    top: "92.58%",
    right: "72.79%",
    width: "27.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
  },
  rectangleParent4: {
    height: 163,
  },
  imageParent1: {
    height: 220,
  },
  rectangleParent3: {
    left: 0,
    top: 0,
  },
  doctor4: {
    top: 365,
    left: 38,
  },
  iconlyboldlocation4: {
    height: "6.04%",
    top: "94.01%",
    right: "87.04%",
    width: "12.96%",
  },
  iconlyboldlocationParent2: {
    height: "79.04%",
    top: "20.92%",
    bottom: "0.04%",
    position: "absolute",
  },
  iconlyboldstar4: {
    height: "6.17%",
    top: "93.88%",
    right: "72.79%",
    width: "27.21%",
  },
  rectangleParent6: {
    height: 196,
  },
  imageParent2: {
    height: 253,
  },
  rectangleParent5: {
    left: 0,
    top: 0,
  },
  doctor5: {
    top: 457,
    left: 38,
  },
  text5: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    width: 30,
    color: Color.colorGray_100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    height: 21,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 11,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGray_100,
    width: 17,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 3,
    borderRadius: 1,
    backgroundColor: Color.colorGray_100,
    width: 14,
    height: 7,
    position: "absolute",
  },
  batteryWrapper: {
    width: 19,
    height: 11,
    top: 0,
  },
  cellularConnectionParent: {
    height: "52.38%",
    width: "22.26%",
    top: "23.81%",
    right: "0%",
    bottom: "23.81%",
    left: "77.74%",
    position: "absolute",
  },
  frameParent: {
    top: 12,
    left: 25,
    width: 310,
    height: 21,
    position: "absolute",
  },
  topBarWrapper: {
    height: 31,
  },
  groupParent: {
    height: 716,
  },
  chatWithDoc: {
    flex: 1,
    width: "100%",
    height: 728,
    overflow: "hidden",
  },
});

export default ChatWithDoc;
