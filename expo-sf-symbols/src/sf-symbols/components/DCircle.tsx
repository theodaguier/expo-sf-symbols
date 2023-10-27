
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
<g clip-path="url(#clip0_2207_37635)">
<path d="M13.9804 25.9594C20.5195 25.9594 25.9335 20.5337 25.9335 14.0063C25.9335 7.46728 20.5078 2.05322 13.9687 2.05322C7.4414 2.05322 2.02734 7.46728 2.02734 14.0063C2.02734 20.5337 7.45312 25.9594 13.9804 25.9594ZM13.9804 23.9673C8.44922 23.9673 4.03125 19.5376 4.03125 14.0063C4.03125 8.4751 8.4375 4.04541 13.9687 4.04541C19.5 4.04541 23.9414 8.4751 23.9414 14.0063C23.9414 19.5376 19.5117 23.9673 13.9804 23.9673Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.8984 19.2329H13.8867C17.2148 19.2329 19.0898 17.3344 19.0898 13.8657C19.0898 10.4438 17.2382 8.55713 13.8867 8.55713H10.8984C10.3008 8.55713 9.98438 8.979 9.98438 9.61181V18.1782C9.98438 18.811 10.3008 19.2329 10.8984 19.2329ZM11.7891 17.7798V10.0102H13.6757C15.9609 10.0102 17.2148 11.3696 17.2148 13.9009C17.2148 16.479 15.9726 17.7798 13.6757 17.7798H11.7891Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37635">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02734 2.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const DCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
