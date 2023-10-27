
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
<g clip-path="url(#clip0_2207_35497)">
<path d="M5.91187 24.0747V4.5044C5.91187 3.54346 6.49781 2.96924 7.50562 2.96924H20.1267C21.1228 2.96924 21.7204 3.54346 21.7204 4.5044V24.0747C21.7204 25.0356 21.1228 25.5981 20.1267 25.5981H7.50562C6.49781 25.5981 5.91187 25.0356 5.91187 24.0747Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.02515 24.3911C4.02515 26.2427 5.32593 27.4848 7.27124 27.4848H20.361C22.3063 27.4848 23.6071 26.2427 23.6071 24.3911V4.18799C23.6071 2.33643 22.3063 1.08252 20.361 1.08252H7.27124C5.32593 1.08252 4.02515 2.33643 4.02515 4.18799V24.3911ZM5.91187 24.0747V4.5044C5.91187 3.54346 6.49781 2.96924 7.50562 2.96924H20.1267C21.1228 2.96924 21.7204 3.54346 21.7204 4.5044V24.0747C21.7204 25.0356 21.1228 25.5981 20.1267 25.5981H7.50562C6.49781 25.5981 5.91187 25.0356 5.91187 24.0747ZM10.4939 24.7075H17.1384C17.4665 24.7075 17.6892 24.4848 17.6892 24.1567C17.6892 23.8286 17.4665 23.6177 17.1384 23.6177H10.4939C10.1775 23.6177 9.95484 23.8286 9.95484 24.1567C9.95484 24.4848 10.1775 24.7075 10.4939 24.7075Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35497">
<rect width="19.582" height="26.4258" fill="currentColor" transform="translate(4.02515 1.08252)"/>
</clipPath>
</defs>
</svg>

`;

export const IpadGen2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
