
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
<g clip-path="url(#clip0_2207_37144)">
<path d="M13.9867 25.9707C20.5258 25.9707 25.9398 20.545 25.9398 14.0176C25.9398 7.47851 20.5141 2.06445 13.975 2.06445C7.44763 2.06445 2.03357 7.47851 2.03357 14.0176C2.03357 20.545 7.45935 25.9707 13.9867 25.9707Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.92419 19.8653C8.92419 19.3731 9.25232 19.0333 9.73279 19.0333C10.1195 19.0333 10.3422 19.127 11.0687 19.127C12.0062 19.127 12.4867 18.6114 12.6508 17.3575L13.0727 14.3457H10.5765C10.0726 14.3457 9.68591 13.9825 9.68591 13.502C9.68591 12.9864 10.0726 12.6231 10.5648 12.6231H13.3188L13.6352 10.3613C13.9047 8.28711 15.1117 7.15039 17.0336 7.15039C18.3461 7.15039 19.0727 7.49023 19.0727 8.1582C19.0727 8.63867 18.7445 8.96679 18.2641 8.96679C17.9125 8.96679 17.6781 8.88476 16.9281 8.88476C16.0024 8.88476 15.5219 9.40039 15.3578 10.666L15.0883 12.6231H18.018C18.5453 12.6231 18.932 12.9864 18.932 13.502C18.932 13.9825 18.557 14.3457 18.0297 14.3457H14.8305L14.3734 17.6504C14.0922 19.7481 12.8852 20.8731 10.9633 20.8731C9.62732 20.8731 8.92419 20.5333 8.92419 19.8653Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37144">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03357 2.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const FCursiveCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
