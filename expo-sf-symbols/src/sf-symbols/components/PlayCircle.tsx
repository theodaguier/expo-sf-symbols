
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
<g clip-path="url(#clip0_2207_33830)">
<path d="M14.0202 26.0166C20.5593 26.0166 25.9733 20.5909 25.9733 14.0635C25.9733 7.52441 20.5476 2.11035 14.0085 2.11035C7.4812 2.11035 2.06714 7.52441 2.06714 14.0635C2.06714 20.5909 7.49292 26.0166 14.0202 26.0166ZM14.0202 24.0245C8.48902 24.0245 4.07105 19.5948 4.07105 14.0635C4.07105 8.53223 8.4773 4.10254 14.0085 4.10254C19.5398 4.10254 23.9812 8.53223 23.9812 14.0635C23.9812 19.5948 19.5515 24.0245 14.0202 24.0245Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.8289 18.6455L18.4968 14.6962C18.989 14.415 18.9773 13.7353 18.4968 13.4423L11.8289 9.49314C11.325 9.20017 10.657 9.42283 10.657 9.99705V18.1415C10.657 18.7041 11.2781 18.9736 11.8289 18.6455Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33830">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06714 2.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlayCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
