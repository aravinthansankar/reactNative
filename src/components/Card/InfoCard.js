import React from "react";
import { View, Image } from "react-native";
import { Card, Text} from "@ui-kitten/components";
import InfoCardStyle from "./InfoCardStyle";

const Header = (title) => (
  <View>
    <Text category="h5">{title}</Text>
  </View>
);


const InfoCard = (props) => {
  return (
    <React.Fragment>
      <Card
        style={InfoCardStyle.card}
        header={Header(props.title)}
        onPress={props.onSelect}
        useForeground
      >
        <Image style={InfoCardStyle.Image} source={{ uri: props.image }} />
      </Card>
    </React.Fragment>
  );
};

export default InfoCard;
