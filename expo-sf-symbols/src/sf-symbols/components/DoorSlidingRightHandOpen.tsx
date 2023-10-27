
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
<g clip-path="url(#clip0_2207_35092)">
<path d="M27.7724 26.9246C28.2998 26.9246 28.7216 26.5027 28.7216 25.9871V4.44799C28.7216 3.01831 27.7373 2.05737 26.2607 2.05737H2.51856C1.05371 2.05737 0.0693359 3.01831 0.0693359 4.44799V25.9871C0.0693359 26.5027 0.491211 26.9246 1.00684 26.9246C1.53418 26.9246 1.95606 26.5027 1.95606 25.9871V4.56518C1.95606 4.19018 2.20215 3.94409 2.55372 3.94409H26.2373C26.5888 3.94409 26.8349 4.19018 26.8349 4.56518V25.9871C26.8349 26.5027 27.2568 26.9246 27.7724 26.9246Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8974 26.5144C14.1201 26.5144 14.2959 26.3269 14.2959 26.116V5.70191C14.2959 5.47926 14.1201 5.30347 13.8974 5.30347H3.72559C3.50293 5.30347 3.32715 5.47926 3.32715 5.70191V26.116C3.32715 26.3269 3.50293 26.5144 3.72559 26.5144H13.8974ZM11.6474 17.7488C11.3076 17.7488 11.0732 17.5144 11.0732 17.1746V15.1238C11.0732 14.784 11.3076 14.5613 11.6474 14.5613C11.9755 14.5613 12.2099 14.784 12.2099 15.1238V17.1746C12.2099 17.5144 11.9755 17.7488 11.6474 17.7488Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35092">
<rect width="28.6523" height="24.8789" fill="currentColor" transform="translate(0.0693359 2.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DoorSlidingRightHandOpen = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
