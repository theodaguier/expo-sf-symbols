
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
<g clip-path="url(#clip0_2207_33656)">
<path d="M4.00684 14.0527C4.01856 8.52149 8.44824 4.0918 13.9795 4.0918C14.3545 4.0918 14.7295 4.11523 15.0928 4.16211C11.7881 6.14258 9.93653 9.63477 9.93653 14.0527C9.93653 18.459 11.7764 21.9394 15.0577 23.9434C14.6944 23.9902 14.3311 24.0137 13.9678 24.0137C8.43653 24.0137 3.99512 19.584 4.00684 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M25.9208 14.0527C25.9208 7.51367 20.5185 2.09961 13.9794 2.09961C7.45215 2.09961 2.01465 7.51367 2.01465 14.0527C2.01465 20.5801 7.44043 26.0058 13.9677 26.0058C20.5068 26.0058 25.9208 20.5801 25.9208 14.0527ZM4.00684 14.0527C4.01856 8.52149 8.44824 4.0918 13.9794 4.0918C14.3544 4.0918 14.7294 4.11523 15.0927 4.16211C11.7881 6.14258 9.93653 9.63477 9.93653 14.0527C9.93653 18.459 11.7764 21.9394 15.0576 23.9434C14.6943 23.9902 14.331 24.0137 13.9677 24.0137C8.43653 24.0137 3.99512 19.584 4.00684 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33656">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01465 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseWaningCrescent = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
