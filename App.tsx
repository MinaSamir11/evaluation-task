import { Provider } from "react-redux";
import AppNavigation from "./src/navigation";

import React, { useEffect, type PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

import { store } from "./src/redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
