import React, { useEffect, useRef } from "react";
import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import routNames from "./routeNames";
// import {Splash} from '../screens/splash';
import Home from "../screens/Home";
import PostDetails from "../screens/PostDetails";

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

const AppNavigation: React.FC = () => {
  const routeNameRef = useRef<string | undefined>();

  // const isLoadingRequest = useSelector((state) => state.appState.isLoading);
  // const isAppLoaded = useSelector((state) => state.appState.isAppLoaded);

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "white",
        },
      }}
      ref={navigationRef}
      onReady={() =>
        //@ts-ignore
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName: string | undefined =
          navigationRef?.current?.getCurrentRoute()?.name;
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name={routNames.POSTS}
          component={Home}
          options={{
            animation: "slide_from_bottom",
            title: "Home",
          }}
        />
        <Stack.Screen
          name={routNames.POST_DETAILS}
          component={PostDetails}
          options={{
            animation: "slide_from_bottom",
            title: "Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, {
      ...params,
    });
  }
}

export default AppNavigation;
