
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
<g clip-path="url(#clip0_2207_35090)">
<path d="M1.00269 26.9246C1.53003 26.9246 1.95191 26.5027 1.95191 25.9871V4.56518C1.95191 4.19018 2.198 3.94409 2.54957 3.94409H26.2332C26.5847 3.94409 26.8308 4.19018 26.8308 4.56518V25.9871C26.8308 26.5027 27.2527 26.9246 27.7683 26.9246C28.2957 26.9246 28.7175 26.5027 28.7175 25.9871V4.44799C28.7175 3.01831 27.7332 2.05737 26.2566 2.05737H2.51441C1.04956 2.05737 0.0651855 3.01831 0.0651855 4.44799V25.9871C0.0651855 26.5027 0.487061 26.9246 1.00269 26.9246Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.8894 26.5144H25.0613C25.284 26.5144 25.4597 26.3269 25.4597 26.116V5.70191C25.4597 5.47926 25.284 5.30347 25.0613 5.30347H14.8894C14.6668 5.30347 14.491 5.47926 14.491 5.70191V26.116C14.491 26.3269 14.6668 26.5144 14.8894 26.5144ZM17.1394 17.7488C16.8113 17.7488 16.5769 17.5144 16.5769 17.1746V15.1238C16.5769 14.784 16.8113 14.5613 17.1394 14.5613C17.4793 14.5613 17.7019 14.784 17.7019 15.1238V17.1746C17.7019 17.5144 17.4793 17.7488 17.1394 17.7488Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35090">
<rect width="28.6523" height="24.8789" fill="currentColor" transform="translate(0.0651855 2.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DoorSlidingLeftHandOpen = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
