
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
<g clip-path="url(#clip0_2207_34623)">
<path d="M8.04712 26.9678C8.50415 26.9678 8.84399 26.7334 9.39477 26.2178L13.6253 22.3506H21.5471C25.0393 22.3506 26.9143 20.4288 26.9143 16.9952V8.01856C26.9143 4.58497 25.0393 2.65137 21.5471 2.65137H6.45337C2.96118 2.65137 1.08618 4.57325 1.08618 8.01856V16.9952C1.08618 20.4405 2.96118 22.3506 6.45337 22.3506H7.00415V25.7608C7.00415 26.4873 7.37915 26.9678 8.04712 26.9678Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.055 18.7881C11.5862 18.7881 11.2346 18.4483 11.2346 17.9795C11.2346 17.5459 11.5862 17.1944 12.055 17.1944H13.4378V12.085H12.2424C11.7854 12.085 11.4221 11.7569 11.4221 11.2881C11.4221 10.8545 11.7854 10.5029 12.2424 10.5029H14.3518C14.9143 10.5029 15.219 10.9131 15.219 11.5108V17.1944H16.6018C17.0706 17.1944 17.4221 17.5459 17.4221 17.9795C17.4221 18.4483 17.0706 18.7881 16.6018 18.7881H12.055ZM13.9065 8.65136C13.0979 8.65136 12.4417 7.99511 12.4417 7.1748C12.4417 6.35449 13.0979 5.69824 13.9065 5.69824C14.7268 5.69824 15.3714 6.35449 15.3714 7.1748C15.3714 7.99511 14.7268 8.65136 13.9065 8.65136Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34623">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1.08618 1.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const InfoBubbleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
