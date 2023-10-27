
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
<g clip-path="url(#clip0_2207_34710)">
<path d="M3.04492 28.4477H25.1934C25.7442 28.4477 26.1778 28.0141 26.1778 27.4751C26.1778 26.9243 25.7442 26.5024 25.1934 26.5024H3.04492C2.50586 26.5024 2.08398 26.9243 2.08398 27.4751C2.08398 28.0141 2.50586 28.4477 3.04492 28.4477Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.94726 13.647H18.3145C19.9902 13.647 20.9981 12.6977 20.9981 11.022V2.77197C20.9981 1.13134 19.9902 0.0532227 18.3145 0.0532227H9.94726C8.2832 0.0532227 7.26367 1.04932 7.26367 2.77197V10.9399C7.26367 12.6274 8.2832 13.647 9.94726 13.647ZM9.57226 20.1391H18.6895C19.3692 20.1391 19.8379 19.6938 19.8379 19.0376C19.8379 18.7446 19.6973 18.3813 19.4629 18.0884L16.791 15.0063H11.459L8.8457 18.0884C8.58789 18.393 8.42382 18.7446 8.42382 19.0376C8.42382 19.6938 8.89257 20.1391 9.57226 20.1391Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34710">
<rect width="24.0938" height="28.4883" fill="currentColor" transform="translate(2.08398 0.0532227)"/>
</clipPath>
</defs>
</svg>

`;

export const DeskviewFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
