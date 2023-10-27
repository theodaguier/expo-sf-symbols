
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
<g clip-path="url(#clip0_2207_34067)">
<path d="M24.5764 13.0015V14.8882H3.0022V13.0015H24.5764ZM3.0022 6.82569V21.0523C3.0022 23.5015 4.22095 24.732 6.63501 24.732H20.9436C23.3577 24.732 24.5764 23.5015 24.5764 21.0523V6.82569C24.5764 4.38819 23.3694 3.15771 20.9436 3.15771H6.63501C4.20923 3.15771 3.0022 4.38819 3.0022 6.82569Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34067">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0022 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSplit1x2Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
