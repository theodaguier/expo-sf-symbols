
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
<g clip-path="url(#clip0_2207_35270)">
<path d="M12.8467 24.732V16.1655C12.8467 14.1851 14.1005 12.9897 16.1748 12.9897H24.5888V14.8765H16.1982C15.2724 14.8765 14.7334 15.3804 14.7334 16.2476V24.732H12.8467ZM6.69434 24.732H20.9091C23.3701 24.732 24.5888 23.5132 24.5888 21.0991V6.79053C24.5888 4.37647 23.3701 3.15771 20.9091 3.15771H6.69434C4.24512 3.15771 3.01465 4.36475 3.01465 6.79053V21.0991C3.01465 23.5249 4.24512 24.732 6.69434 24.732Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35270">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.01465 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSplitBottomrightquarterFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
