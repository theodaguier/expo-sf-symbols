
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
<g clip-path="url(#clip0_2207_37576)">
<path d="M21.768 5.03552C21.2993 5.03552 20.9243 5.23474 20.4321 5.48083L5.37354 12.7933C4.37744 13.2855 4.06104 13.7308 4.06104 14.3519C4.06104 14.973 4.37744 15.43 5.37354 15.9222L20.4321 23.223C20.936 23.4691 21.311 23.6683 21.7798 23.6683C22.6469 23.6683 23.1743 23.0121 23.1743 21.9926V6.7113C23.1743 5.69177 22.6352 5.03552 21.768 5.03552ZM21.1704 7.26208C21.2407 7.26208 21.2876 7.32068 21.2876 7.40271L21.2993 21.3011C21.2993 21.3949 21.2524 21.4418 21.1821 21.4418C21.1352 21.4418 21.0883 21.4183 21.0415 21.3949L6.68604 14.4808C6.62745 14.4574 6.58057 14.4105 6.58057 14.3519C6.58057 14.2933 6.62745 14.2465 6.68604 14.223L21.0298 7.32068C21.0766 7.28552 21.1235 7.26208 21.1704 7.26208Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37576">
<rect width="19.1133" height="18.6445" fill="currentColor" transform="translate(4.06104 5.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
