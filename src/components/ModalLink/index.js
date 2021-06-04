import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

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

const ModalLink = () => {
  return (
    <ModalContainer>
      <View style={{ flex: 1 }}></View>
      <Container>
        <Header>
          <TouchableOpacity>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://sujeitoprogramador.com</LongUrl>

          <ShortLinkArea activeOpacity={1}>
            <ShortLinkUrl numberOfLines={1}>
              https://bit.ly/asdasdasdas
            </ShortLinkUrl>
            <TouchableOpacity>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
};

export default ModalLink;
