
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35618)">
<path d="M15.958 4.09045C12.3721 4.06701 8.07129 7.66466 8.07129 11.1451C8.07129 14.0279 10.9541 16.3014 13.2861 16.2896C16.5322 16.2779 21.0088 12.5162 21.0088 9.3756C21.0088 6.34044 18.6651 4.11388 15.958 4.09045ZM12.1728 14.6725C11.5166 14.6725 10.5088 13.8522 9.87598 12.8326C9.25488 11.7897 9.27832 10.9811 9.93457 10.9811C10.5791 10.9811 11.5986 11.7897 12.2197 12.8326C12.8408 13.8522 12.8174 14.6725 12.1728 14.6725ZM15.4424 9.44591C15.0674 8.91857 15.1963 8.21544 15.7119 7.85216L17.3408 6.66857C17.8447 6.29357 18.5596 6.42247 18.9111 6.94982C19.3096 7.46544 19.1924 8.14513 18.6768 8.53185L17.0478 9.692C16.5088 10.0787 15.7939 9.96153 15.4424 9.44591ZM16.5322 24.6217H17.9971C18.7236 24.6217 19.2041 24.2467 19.2041 23.5318V14.7779C18.0557 15.8092 16.6963 16.6295 15.3252 17.0631V23.5318C15.3252 24.2467 15.7939 24.6217 16.5322 24.6217Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35618">
<rect width="12.9375" height="20.6133" fill="currentColor" transform="translate(8.07129 4.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const AirpodGen3Right = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
