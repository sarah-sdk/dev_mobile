import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { queryClient, asyncStoragePersister } from "@/lib/queryClient";
import  { darkTheme, lightTheme } from "@/theme";
import { AppThemeProvider, useAppTheme } from "@/providers/ThemeProvider";
import React from "react";

export default function RootLayout() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <AppThemeProvider>
        <ThemedApp />
      </AppThemeProvider>
    </PersistQueryClientProvider>
  );
}


function ThemedApp() {
  const { isDark } = useAppTheme();
  const restyleTheme = isDark ? darkTheme : lightTheme;
  
  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme : DefaultTheme).colors,
      primary: "rgb(255, 45, 85)",
    },
  };
  
  return (
    <RestyleThemeProvider theme={restyleTheme}>
        <ThemeProvider value={navTheme}>
          <StatusBar style={isDark ? "light" : "dark"} />
          <RootNavigator />
        </ThemeProvider>
      </RestyleThemeProvider>
    );
}

function RootNavigator() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
    </Stack>
  );
}