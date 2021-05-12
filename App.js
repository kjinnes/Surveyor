import React from "react";
import { Provider } from "react-redux";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { name as appName } from "./app.json";
import {
  Fish1,
  Camera,
  SignIn,
  SignUp,
  EditUserInfo,
  ProjectMap,
  ProjectProfile,
  ReferenceInfo,
  UserMap,
  UserProfile,
  FishAlive1,
  FishAlive2,
} from "./screens/index.js";

import { useStore } from "./redux/store";
import AuthProvider from "./auth";

export default function App() {
  const store = useStore({});

  console.log("App is working");
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="ProjectMap"
              >
                <Stack.Screen name="Fish1" component={Fish1} />
                <Stack.Screen name="ProjectMap" component={ProjectMap} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen
                  name="ProjectProfile"
                  component={ProjectProfile}
                />
                <Stack.Screen name="Profile" component={UserProfile} />
                <Stack.Screen name="Camera" component={Camera} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </PaperProvider>
      </AuthProvider>
    </Provider>
  );
}

const theme = {
  ...DefaultTheme,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

AppRegistry.registerComponent(appName, () => Main);
