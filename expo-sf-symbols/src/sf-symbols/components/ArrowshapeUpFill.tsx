
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
<g clip-path="url(#clip0_2207_33110)">
<path d="M13.7588 1.0238C13.3721 1.0238 12.9268 1.17615 12.5049 1.62146L3.77441 10.8676C3.24707 11.43 3.0127 11.8988 3.0127 12.473C3.0127 13.2699 3.59863 13.8441 4.38379 13.8441H9.12989V23.5941C9.12989 25.2933 10.0908 26.2894 11.7666 26.2894H15.7393C17.415 26.2894 18.376 25.2933 18.376 23.5941V13.8441H23.0752C23.8604 13.8441 24.5166 13.2699 24.5166 12.4496C24.5166 11.8754 24.2588 11.4886 23.6729 10.8676L15.0244 1.62146C14.6025 1.16443 14.1572 1.0238 13.7588 1.0238Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33110">
<rect width="21.5039" height="25.3008" fill="currentColor" transform="translate(3.0127 1.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeUpFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
