import React from "react";
import { Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/StatusBarPage";

const Home = () => {
  return (
    <LinearGradient
      colors={["#1dddd9", "#132742"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBarPage backgroundColor="#1dddd9" barStyle="light-content" />
      <Text>Página Home</Text>
    </LinearGradient>
  );
};

export default Home;
