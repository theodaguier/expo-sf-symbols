
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34253)">
<path d="M3.76245 24.7169H23.696C25.489 24.7169 26.3913 23.8497 26.3913 22.045V17.5567C26.3913 15.7754 25.489 14.8965 23.696 14.8965H3.76245C1.96948 14.8965 1.06714 15.7754 1.06714 17.5567V22.045C1.06714 23.8497 1.96948 24.7169 3.76245 24.7169Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.76245 12.9629H23.696C25.489 12.9629 26.3913 12.084 26.3913 10.2793V5.80273C26.3913 4.00977 25.489 3.14258 23.696 3.14258H3.76245C1.96948 3.14258 1.06714 4.00977 1.06714 5.80273V10.2793C1.06714 12.084 1.96948 12.9629 3.76245 12.9629Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34253">
<rect width="25.3242" height="21.5977" fill="currentColor" transform="translate(1.06714 3.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleGrid1x2Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
