import React from "react";
import * as Icons from "./src/sf-symbols/components";
import { IconName } from "./types/IconName";

interface Props {
  name: IconName;
  width?: number;
  height?: number;
  color?: string;
  style?: any;
  opacity?: number;
}

export function SFSymbols({
  name,
  width = 24,
  height = 24,
  opacity = 1,
  ...props
}: Props) {
  const IconComponent = Icons[name];

  return (
    <IconComponent width={width} height={height} opacity={opacity} {...props} />
  );
}
