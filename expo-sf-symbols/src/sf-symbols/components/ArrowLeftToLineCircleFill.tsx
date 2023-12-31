
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
<g clip-path="url(#clip0_2207_37483)">
<path d="M13.9636 25.923C20.5027 25.923 25.9167 20.4973 25.9167 13.9699C25.9167 7.43091 20.491 2.01685 13.9519 2.01685C7.42456 2.01685 2.0105 7.43091 2.0105 13.9699C2.0105 20.4973 7.43628 25.923 13.9636 25.923Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.72534 19.302C8.24488 19.302 7.90503 18.9738 7.90503 18.5051V9.42309C7.90503 8.95434 8.24488 8.62622 8.72534 8.62622C9.19409 8.62622 9.53394 8.95434 9.53394 9.42309V18.5051C9.53394 18.9738 9.19409 19.302 8.72534 19.302ZM21.405 13.9816C21.405 14.4738 21.0652 14.802 20.5964 14.802H15.0652L12.8386 14.6613L15.2996 16.841L16.0613 17.5441C16.2371 17.6848 16.2957 17.884 16.2957 18.1301C16.2957 18.5988 15.9675 18.9152 15.4988 18.9152C15.2996 18.9152 15.0535 18.8098 14.8894 18.6457L10.7292 14.591C10.5417 14.4152 10.448 14.2043 10.448 13.9816C10.448 13.7473 10.5652 13.548 10.7292 13.3606L14.9011 9.27075C15.0769 9.08325 15.2878 9.01293 15.4988 9.01293C15.9441 9.01293 16.2957 9.32934 16.2957 9.78637C16.2957 10.009 16.2371 10.2317 16.0613 10.384L15.3113 11.1223L12.8503 13.302L15.0652 13.173H20.5964C21.0652 13.173 21.405 13.5129 21.405 13.9816Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37483">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowLeftToLineCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
