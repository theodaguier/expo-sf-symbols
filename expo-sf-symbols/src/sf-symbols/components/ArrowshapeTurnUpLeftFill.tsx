
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
<g clip-path="url(#clip0_2207_33120)">
<path d="M12.5459 24.5147C13.3428 24.5147 13.917 23.9287 13.917 23.1436V18.667H14.2569C18.8037 18.667 21.6631 19.8155 23.7139 23.6475C24.124 24.3975 24.6631 24.5147 25.1553 24.5147C25.7764 24.5147 26.3623 23.9522 26.3623 22.9444C26.3623 14.2842 22.6944 8.88184 14.2569 8.88184H13.917V4.45215C13.917 3.66699 13.3428 3.02246 12.5225 3.02246C11.9483 3.02246 11.5615 3.26855 10.9404 3.85449L1.69434 12.5029C1.2373 12.9365 1.09668 13.3702 1.09668 13.7686C1.09668 14.1553 1.24902 14.6006 1.69434 15.0225L10.9404 23.753C11.5029 24.2803 11.9717 24.5147 12.5459 24.5147Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33120">
<rect width="25.2656" height="21.5039" fill="currentColor" transform="translate(1.09668 3.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
