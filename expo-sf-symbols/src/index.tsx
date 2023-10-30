import React, { Component } from "react";
import { Text, View } from "react-native";
import * as Icons from "./sf-symbols/components";
import { IconName } from "../types/IconName";

// Définissez votre classe de composant
interface Props {
  name: IconName;
  width?: number;
  height?: number;
  opacity?: number;
  color?: string;
  style?: any;
}

interface State {}

class SFSymbols extends Component<Props, State> {
  // Définissez votre constructeur de classe
  constructor(props) {
    super(props);
  }

  // Définissez votre méthode de rendu

  render() {
    const { name, width, height, opacity, color, style } = this.props;

    const IconComponent = Icons[name];

    return (
      <IconComponent
        width={width || 24}
        height={height || 24}
        opacity={opacity || 1}
        color={color}
        style={style}
      />
    );
  }
}

export { SFSymbols };
