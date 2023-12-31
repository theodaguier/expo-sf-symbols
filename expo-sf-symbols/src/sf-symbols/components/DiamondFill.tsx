
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
<g clip-path="url(#clip0_2207_34334)">
<path d="M2.32041 16.9352L11.7071 26.3219C13.4415 28.0563 15.1524 28.068 16.875 26.357L26.3086 16.9117C28.0196 15.2008 28.0079 13.4781 26.2735 11.7438L16.8985 2.36875C15.1641 0.634371 13.4532 0.610933 11.7305 2.33359L2.28525 11.7672C0.562593 13.4899 0.586031 15.2008 2.32041 16.9352Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34334">
<rect width="26.5768" height="26.593" fill="currentColor" transform="translate(1.00635 1.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DiamondFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
