
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
<g clip-path="url(#clip0_2207_33554)">
<path d="M10.0869 24.876H17.3174C18.958 24.876 19.8369 23.9151 19.8369 22.3682V17.1182H24.5947C25.5556 17.1182 26.3056 16.5322 26.3056 15.6416C26.3056 15.0908 26.0244 14.6807 25.6025 14.2588L15.1494 3.84082C14.6924 3.38379 14.2236 3.12598 13.6963 3.12598C13.1806 3.12598 12.7002 3.38379 12.2548 3.84082L1.80176 14.2588C1.34473 14.7041 1.09863 15.0908 1.09863 15.6416C1.09863 16.5322 1.84863 17.1182 2.79785 17.1182H7.56738V22.3682C7.56738 23.9151 8.44629 24.876 10.0869 24.876Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33554">
<rect width="25.207" height="21.9023" fill="currentColor" transform="translate(1.09863 3.12598)"/>
</clipPath>
</defs>
</svg>

`;

export const ShiftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
