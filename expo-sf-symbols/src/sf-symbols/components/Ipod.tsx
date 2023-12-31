
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
<g clip-path="url(#clip0_2207_35419)">
<path d="M6.04834 22.416C6.04834 24.2442 7.32568 25.4629 9.23584 25.4629H18.6577C20.5678 25.4629 21.8569 24.2442 21.8569 22.416V5.13086C21.8569 3.30273 20.5678 2.08398 18.6577 2.08398H9.23584C7.32568 2.08398 6.04834 3.30273 6.04834 5.13086V22.416ZM7.93506 11.0137V5.43554C7.93506 4.49804 8.48584 3.9707 9.48193 3.9707H18.4233C19.4077 3.9707 19.9702 4.49804 19.9702 5.43554V11.0137C19.9702 11.9629 19.4077 12.4902 18.4233 12.4902H9.48193C8.48584 12.4902 7.93506 11.9629 7.93506 11.0137ZM13.9585 23.1074C11.521 23.1074 9.52881 21.1387 9.52881 18.7012C9.52881 16.252 11.521 14.2832 13.9585 14.2832C16.3842 14.2832 18.3764 16.252 18.3764 18.7012C18.3764 21.1387 16.3842 23.1074 13.9585 23.1074ZM13.9585 21.4551C12.4233 21.4551 11.1811 20.2129 11.1811 18.7012C11.1811 17.1778 12.4233 15.9356 13.9585 15.9356C15.4819 15.9356 16.7124 17.1778 16.7124 18.7012C16.7124 20.2129 15.4819 21.4551 13.9585 21.4551Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35419">
<rect width="15.8086" height="23.3789" fill="currentColor" transform="translate(6.04834 2.08398)"/>
</clipPath>
</defs>
</svg>

`;

export const Ipod = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
