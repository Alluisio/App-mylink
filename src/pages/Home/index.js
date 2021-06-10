import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import StatusBarPage from "../../components/StatusBarPage";
import ModalLink from "../../components/ModalLink";
import Menu from "../../components/Menu";
import api from "../../services/api";

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLiknkText,
} from "./styles";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});

  const handleShortLink = async () => {
    setLoading(true);

    try {
      const response = await api.post("/shorten", {
        long_url: input,
      });

      setData(response.data);
      setModalVisible(true);

      Keyboard.dismiss();
      setLoading(false);
      setInput("");
    } catch (err) {
      alert("Ops parece que algo deu errado.");

      Keyboard.dismiss();
      setInput("");
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#1dddd9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage backgroundColor="#1dddd9" barStyle="light-content" />
        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/Logo.png")}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>
            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor="white"
                autoCaptalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonLiknkText>Gerar Link</ButtonLiknkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Home;
