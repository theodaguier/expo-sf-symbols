
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
<g clip-path="url(#clip0_2207_37024)">
<path d="M21.0808 23.7439V12.4705C21.0808 10.5955 20.073 9.59937 18.1628 9.59937H1.01831V11.2751H18.0457C18.9011 11.2751 19.405 11.7908 19.405 12.658V23.7439H21.0808ZM14.7175 10.1501H13.0417V23.7439H14.7175V10.1501ZM3.69019 24.5993H23.9636C26.4246 24.5993 27.6433 23.3923 27.6433 20.9782V6.65796C27.6433 4.2439 26.4246 3.02515 23.9636 3.02515H3.69019C1.24097 3.02515 0.010498 4.2439 0.010498 6.65796V20.9782C0.010498 23.3923 1.24097 24.5993 3.69019 24.5993ZM3.71362 22.7126C2.54175 22.7126 1.89722 22.0915 1.89722 20.8728V6.76343C1.89722 5.54468 2.54175 4.91187 3.71362 4.91187H23.9402C25.1003 4.91187 25.7566 5.54468 25.7566 6.76343V20.8728C25.7566 22.0915 25.1003 22.7126 23.9402 22.7126H3.71362Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37024">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.010498 3.02515)"/>
</clipPath>
</defs>
</svg>

`;

export const Aspectratio = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
