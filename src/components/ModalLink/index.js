import React from "react";
import { TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
} from "./styles";

const ModalLink = ({ onClose }) => {
  const copyLink = () => {
    Clipboard.setString("https://seulink.com.br");
    alert("link copiado com sucesso!");
  };
  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://sujeitoprogramador.com</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>
              https://bit.ly/asdasdasdas
            </ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
};

export default ModalLink;
