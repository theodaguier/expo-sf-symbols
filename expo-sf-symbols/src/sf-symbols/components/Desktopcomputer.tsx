
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
<g clip-path="url(#clip0_2207_35383)">
<path d="M2.4663 17.1587C2.11474 17.1587 1.9624 17.0298 1.9624 16.6548V5.604C1.9624 5.07666 2.29052 4.76025 2.80615 4.76025H25.2827C25.7984 4.76025 26.1265 5.07666 26.1265 5.604V16.6548C26.1265 17.0298 25.9624 17.1587 25.6109 17.1587H2.4663Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.77099 22.3266H25.3062C26.9937 22.3266 28.0132 21.3071 28.0132 19.6196V5.56884C28.0132 3.88134 26.9937 2.87354 25.3062 2.87354H2.77099C1.09521 2.87354 0.0756836 3.88134 0.0756836 5.56884V19.6196C0.0756836 21.3071 1.09521 22.3266 2.77099 22.3266ZM2.4663 17.1587C2.11474 17.1587 1.9624 17.0298 1.9624 16.6548V5.604C1.9624 5.07666 2.29052 4.76025 2.80615 4.76025H25.2827C25.7984 4.76025 26.1265 5.07666 26.1265 5.604V16.6548C26.1265 17.0298 25.9624 17.1587 25.6109 17.1587H2.4663ZM10.3413 25.1157H17.7476V22.1743H10.3413V25.1157ZM10.271 26.4868H17.8179C18.3335 26.4868 18.7554 26.0649 18.7554 25.5376C18.7554 25.0102 18.3335 24.5884 17.8179 24.5884H10.271C9.75537 24.5884 9.32177 25.0102 9.32177 25.5376C9.32177 26.0649 9.75537 26.4868 10.271 26.4868Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35383">
<rect width="27.9375" height="24.4336" fill="currentColor" transform="translate(0.0756836 2.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const Desktopcomputer = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
