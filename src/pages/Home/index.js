import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";

import { ContainerLogo, Logo } from "./styles";

const Home = () => {
  return (
    <LinearGradient
      colors={["#1dddd9", "#132742"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBarPage backgroundColor="#1dddd9" barStyle="light-content" />
      <Menu />

      <ContainerLogo>
        <Logo source={require("../../assets/Logo.png")} resizeMode="contain" />
      </ContainerLogo>
    </LinearGradient>
  );
};

export default Home;
