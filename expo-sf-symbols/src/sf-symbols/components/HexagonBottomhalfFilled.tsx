
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
<g clip-path="url(#clip0_2207_34353)">
<path d="M3.74927 21.2388L11.7649 25.8559C13.1477 26.6528 14.4954 26.6645 15.9016 25.8559L23.9173 21.2388C25.0071 20.6059 25.593 19.9848 25.593 18.2856V9.16849C25.593 7.51615 24.9954 6.91849 23.9993 6.34427L15.9602 1.70364C14.5071 0.859894 13.1243 0.883332 11.7063 1.70364L3.67896 6.34427C2.67114 6.91849 2.07349 7.51615 2.07349 9.16849V18.2856C2.07349 19.9848 2.67114 20.6059 3.74927 21.2388ZM23.7063 13.7622H3.96021V9.21537C3.96021 8.62943 4.15943 8.33646 4.72193 8.02005L12.4915 3.49662C13.429 2.96927 14.2141 2.94583 15.1751 3.49662L22.9446 8.02005C23.5071 8.33646 23.7063 8.62943 23.7063 9.21537V13.7622Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34353">
<rect width="23.5195" height="25.3799" fill="currentColor" transform="translate(2.07349 1.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HexagonBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
