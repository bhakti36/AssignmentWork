const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415Pro from "./screens/IPhone1415Pro";
import FluentMdl2healthSolid from "./screens/FluentMdl2healthSolid";
import HappyHealth from "./screens/HappyHealth";
import LabAndMedicalService from "./screens/LabAndMedicalService";
import ChatWithDoc from "./screens/ChatWithDoc";
import ChatScreen from "./screens/ChatScreen";
import Pharmacy from "./screens/Pharmacy";
import InsurancePlan from "./screens/InsurancePlan";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Martel-Light": require("./assets/fonts/Martel-Light.ttf"),
    "Martel-Regular": require("./assets/fonts/Martel-Regular.ttf"),
    "Martel-Bold": require("./assets/fonts/Martel-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1415Pro"
              component={IPhone1415Pro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FluentMdl2healthSolid"
              component={FluentMdl2healthSolid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HappyHealth"
              component={HappyHealth}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LabAndMedicalService"
              component={LabAndMedicalService}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatWithDoc"
              component={ChatWithDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pharmacy"
              component={Pharmacy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InsurancePlan"
              component={InsurancePlan}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
