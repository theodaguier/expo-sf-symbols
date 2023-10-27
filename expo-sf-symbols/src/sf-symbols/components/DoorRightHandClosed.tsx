
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
<g clip-path="url(#clip0_2207_35089)">
<path d="M21.9807 26.9246C22.4963 26.9246 22.9182 26.5027 22.9182 25.9871V4.44799C22.9182 3.01831 21.9455 2.05737 20.469 2.05737H7.50806C6.04321 2.05737 5.05884 3.01831 5.05884 4.44799V25.9871C5.05884 26.5027 5.48071 26.9246 5.99634 26.9246C6.52368 26.9246 6.94556 26.5027 6.94556 25.9871V4.56518C6.94556 4.19018 7.19165 3.94409 7.54322 3.94409H20.4338C20.7854 3.94409 21.0315 4.19018 21.0315 4.56518V25.9871C21.0315 26.5027 21.4533 26.9246 21.9807 26.9246Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.2736 26.5144C19.4846 26.5144 19.6604 26.3269 19.6604 26.116V5.70191C19.6604 5.47926 19.4846 5.30347 19.2736 5.30347H8.71509C8.49243 5.30347 8.31665 5.47926 8.31665 5.70191V26.116C8.31665 26.3269 8.49243 26.5144 8.71509 26.5144H19.2736ZM11.1057 17.0926C10.5901 17.0926 10.1682 16.6707 10.1682 16.1551C10.1682 15.6277 10.5901 15.2176 11.1057 15.2176C11.6213 15.2176 12.0432 15.6277 12.0432 16.1551C12.0432 16.6707 11.6213 17.0926 11.1057 17.0926Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35089">
<rect width="17.8594" height="24.8789" fill="currentColor" transform="translate(5.05884 2.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DoorRightHandClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
