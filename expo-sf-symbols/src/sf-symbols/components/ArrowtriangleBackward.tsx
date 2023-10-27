
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
<g clip-path="url(#clip0_2207_37582)">
<path d="M21.7302 5.03552C21.2615 5.03552 20.8865 5.23474 20.3943 5.48083L5.33569 12.7933C4.3396 13.2855 4.02319 13.7308 4.02319 14.3519C4.02319 14.973 4.3396 15.43 5.33569 15.9222L20.3943 23.223C20.8982 23.4691 21.2732 23.6683 21.742 23.6683C22.6091 23.6683 23.1365 23.0121 23.1365 21.9926V6.7113C23.1365 5.69177 22.5974 5.03552 21.7302 5.03552ZM21.1326 7.26208C21.2029 7.26208 21.2498 7.32068 21.2498 7.40271L21.2615 21.3011C21.2615 21.3949 21.2146 21.4418 21.1443 21.4418C21.0974 21.4418 21.0505 21.4183 21.0037 21.3949L6.64819 14.4808C6.5896 14.4574 6.54272 14.4105 6.54272 14.3519C6.54272 14.2933 6.5896 14.2465 6.64819 14.223L20.992 7.32068C21.0388 7.28552 21.0857 7.26208 21.1326 7.26208Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37582">
<rect width="19.1133" height="18.6445" fill="currentColor" transform="translate(4.02319 5.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleBackward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
