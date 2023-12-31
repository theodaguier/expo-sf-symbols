
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
<g clip-path="url(#clip0_2207_33845)">
<path d="M3.75952 24.6777H24.0329C26.4939 24.6777 27.7126 23.4707 27.7126 21.0566V6.73633C27.7126 4.32227 26.4939 3.10352 24.0329 3.10352H3.75952C1.3103 3.10352 0.079834 4.32227 0.079834 6.73633V21.0566C0.079834 23.4707 1.3103 24.6777 3.75952 24.6777Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4978 18.6074C9.88843 18.6074 9.6189 18.2793 9.6189 17.8105V9.95899C9.6189 9.50196 9.88843 9.17383 10.4978 9.17383H11.6814C12.279 9.17383 12.5486 9.50196 12.5486 9.95899V17.8105C12.5486 18.2793 12.279 18.6074 11.6814 18.6074H10.4978ZM16.1462 18.6074C15.5486 18.6074 15.2673 18.2793 15.2673 17.8105V9.95899C15.2673 9.50196 15.5486 9.17383 16.1462 9.17383H17.3415C17.9275 9.17383 18.197 9.50196 18.197 9.95899V17.8105C18.197 18.2793 17.9275 18.6074 17.3415 18.6074H16.1462Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33845">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.079834 3.10352)"/>
</clipPath>
</defs>
</svg>

`;

export const PauseRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
