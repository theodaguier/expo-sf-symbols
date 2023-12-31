
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="38" height="29" viewBox="0 0 38 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35538)">
<path d="M0.952759 15.6953C0.460571 15.6953 0.050415 15.2734 0.050415 14.7695C0.050415 14.2656 0.460571 13.832 0.952759 13.832H10.6559L12.191 13.9023L10.0348 11.9102C9.09729 11.0547 10.3981 9.84766 11.1949 10.6914L14.4645 14.0898C14.6871 14.3242 14.7692 14.5352 14.7692 14.7695C14.7692 15.0039 14.6871 15.2031 14.4645 15.4375L11.2066 18.8242C10.3981 19.6679 9.14417 18.414 10.0348 17.6172L12.191 15.625L10.6559 15.6953H0.952759ZM20.6754 19.8437C22.9137 19.8437 25.2457 23.6172 29.6988 23.6172C34.0231 23.6172 37.2809 19.6914 37.2809 14.5352C37.2809 6.08594 29.8512 5.14844 20.6754 5.14844C11.4996 5.14844 4.05823 6.09766 4.05823 14.5352C4.05823 19.6914 7.32775 23.6172 11.6402 23.6172C16.1051 23.6172 18.4254 19.8437 20.6754 19.8437Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35538">
<rect width="37.2305" height="18.9023" fill="currentColor" transform="translate(0.050415 5.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VisionproAndArrowForwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
