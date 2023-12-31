
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
<g clip-path="url(#clip0_2207_37653)">
<path d="M6.73853 24.6734H20.9533C23.4143 24.6734 24.633 23.4546 24.633 21.0405V6.73193C24.633 4.31787 23.4143 3.09912 20.9533 3.09912H6.73853C4.28931 3.09912 3.05884 4.30615 3.05884 6.73193V21.0405C3.05884 23.4663 4.28931 24.6734 6.73853 24.6734ZM6.76196 22.7866C5.59009 22.7866 4.94556 22.1655 4.94556 20.9468V6.82568C4.94556 5.60693 5.59009 4.98584 6.76196 4.98584H20.9299C22.09 4.98584 22.7463 5.60693 22.7463 6.82568V20.9468C22.7463 22.1655 22.09 22.7866 20.9299 22.7866H6.76196Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.1487 19.2359C10.7581 19.2359 11.0979 18.8491 11.0979 18.1929V14.3257H16.5822V18.1929C16.5822 18.8374 16.9338 19.2359 17.508 19.2359C18.1174 19.2359 18.4572 18.8491 18.4572 18.1929V9.32178C18.4572 8.66553 18.1174 8.27881 17.508 8.27881C16.9338 8.27881 16.5822 8.67725 16.5822 9.32178V12.8608H11.0979V9.32178C11.0979 8.66553 10.7581 8.27881 10.1487 8.27881C9.57446 8.27881 9.23462 8.67725 9.23462 9.32178V18.1929C9.23462 18.8374 9.57446 19.2359 10.1487 19.2359Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37653">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05884 3.07568)"/>
</clipPath>
</defs>
</svg>

`;

export const HSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
