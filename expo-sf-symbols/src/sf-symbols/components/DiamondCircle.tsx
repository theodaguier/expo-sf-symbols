
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
<g clip-path="url(#clip0_2207_34335)">
<path d="M13.9553 25.9609C20.4944 25.9609 25.9084 20.5352 25.9084 14.0078C25.9084 7.46875 20.4827 2.05469 13.9436 2.05469C7.41626 2.05469 2.0022 7.46875 2.0022 14.0078C2.0022 20.5352 7.42798 25.9609 13.9553 25.9609ZM13.9553 23.9688C8.42408 23.9688 4.00611 19.5391 4.00611 14.0078C4.00611 8.47657 8.41236 4.04688 13.9436 4.04688C19.4749 4.04688 23.9163 8.47657 23.9163 14.0078C23.9163 19.5391 19.4866 23.9688 13.9553 23.9688Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.94359 14.9688L12.9827 20.0195C13.6155 20.6406 14.2834 20.6641 14.9163 20.043L19.9905 14.957C20.6116 14.3477 20.5881 13.6563 19.967 13.0352L14.928 7.99611C14.2952 7.37501 13.6272 7.35158 12.9944 7.97267L7.92015 13.0469C7.31077 13.668 7.33421 14.3594 7.94359 14.9688Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34335">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0022 2.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DiamondCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
