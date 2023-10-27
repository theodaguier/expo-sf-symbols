
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
<g clip-path="url(#clip0_2207_36862)">
<path d="M11.042 26.2055H21.3427C23.5693 26.2055 24.9052 24.893 24.9052 22.6898L24.917 4.58435C24.917 2.46326 23.4873 1.03357 21.3779 1.03357H17.7802C15.9404 1.03357 14.4052 1.51404 12.9639 2.83826L5.55762 9.64685C4.56152 10.5609 4.06934 11.85 4.06934 13.4555V19.2328C4.06934 23.475 6.79981 26.2055 11.042 26.2055Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36862">
<rect width="20.8477" height="25.1836" fill="currentColor" transform="translate(4.06934 1.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const ButtonAngledtopVerticalLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
