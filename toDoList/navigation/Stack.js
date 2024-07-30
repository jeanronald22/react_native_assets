import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screens/Home";
import Main from "../Screens/Main";
import { Color } from "../local variables/color";

export const Stack = () => {
  const pile = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <pile.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <pile.Screen name="Home" component={Home} />
        <pile.Screen name="Welcome" component={Main} />
      </pile.Navigator>
    </NavigationContainer>
  );
};
