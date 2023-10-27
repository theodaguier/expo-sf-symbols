
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36665)">
<path d="M3.64062 21.4126L12.8633 26.6391C13.5195 27.0141 14.1406 27.0141 14.8086 26.6391L24.0195 21.4126C25.0977 20.8032 25.6602 20.1821 25.6602 18.5063V9.2251C25.6602 8.00635 25.2148 7.24463 24.2305 6.68213L15.9336 1.97119C14.5156 1.1626 13.1445 1.1626 11.7266 1.97119L3.44141 6.68213C2.44531 7.24463 2 8.00635 2 9.2251V18.5063C2 20.1821 2.57422 20.8032 3.64062 21.4126ZM4.69531 19.8657C4.01562 19.4907 3.78125 19.0922 3.78125 18.4477V9.6001L12.9102 14.8149V24.5415L4.69531 19.8657ZM22.9766 19.8657L14.75 24.5415V14.8149L23.8789 9.6001V18.4477C23.8789 19.0922 23.6445 19.4907 22.9766 19.8657ZM13.8359 13.1743L4.78906 8.05322L8.41016 5.979L17.457 11.1235L13.8359 13.1743ZM19.3438 10.0571L10.2617 4.92432L12.5117 3.64697C13.4141 3.13135 14.2461 3.11963 15.1602 3.64697L22.8828 8.05322L19.3438 10.0571Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36665">
<rect width="23.6602" height="25.793" fill="currentColor" transform="translate(2 1.12744)"/>
</clipPath>
</defs>
</svg>

`;

export const Shippingbox = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
