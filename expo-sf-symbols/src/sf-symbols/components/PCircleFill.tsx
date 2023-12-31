
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
<g clip-path="url(#clip0_2207_37684)">
<path d="M14.0244 26.0087C20.5635 26.0087 25.9775 20.583 25.9775 14.0556C25.9775 7.5166 20.5518 2.10254 14.0127 2.10254C7.48535 2.10254 2.07129 7.5166 2.07129 14.0556C2.07129 20.583 7.49707 26.0087 14.0244 26.0087Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.4346 19.5986C10.8135 19.5986 10.4736 19.1416 10.4736 18.497V9.53223C10.4736 8.87598 10.8018 8.43066 11.4229 8.43066H14.7979C17.1416 8.43066 18.7354 9.93066 18.7354 12.1572C18.7354 14.3837 17.1533 15.8603 14.7861 15.8603H12.419V18.497C12.419 19.165 12.0791 19.5986 11.4346 19.5986ZM12.419 14.3837H14.5283C15.9463 14.3837 16.8135 13.5283 16.8135 12.1572C16.8135 10.7744 15.9346 9.91895 14.5283 9.91895H12.419V14.3837Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37684">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07129 2.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const PCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
