import React from "react";
import { View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { ContainerButton, Item } from "./styles";

const ListItem = () => {
  return (
    <View>
      <ContainerButton activeOpacity={0.9} onPress={() => {}}>
        <Feather name="link" color="#fff" size={24} />
        <Item numberOfLines={1}>
          https://youtadsadasdasdasdasdasdasdasdasdube.com
        </Item>
      </ContainerButton>
    </View>
  );
};

export default ListItem;
