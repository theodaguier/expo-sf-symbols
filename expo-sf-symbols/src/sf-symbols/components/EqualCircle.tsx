
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
<g clip-path="url(#clip0_2207_37227)">
<path d="M14.0224 25.9663C20.5615 25.9663 25.9755 20.5406 25.9755 14.0132C25.9755 7.47412 20.5498 2.06006 14.0107 2.06006C7.4834 2.06006 2.06934 7.47412 2.06934 14.0132C2.06934 20.5406 7.49512 25.9663 14.0224 25.9663ZM14.0224 23.9742C8.49122 23.9742 4.07325 19.5445 4.07325 14.0132C4.07325 8.48194 8.4795 4.05225 14.0107 4.05225C19.542 4.05225 23.9834 8.48194 23.9834 14.0132C23.9834 19.5445 19.5537 23.9742 14.0224 23.9742Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.59277 17.0835H18.417C19.0146 17.0835 19.4248 16.7906 19.4248 16.2046C19.4248 15.607 19.0381 15.3023 18.417 15.3023H9.59277C8.95995 15.3023 8.57324 15.607 8.57324 16.2046C8.57324 16.7906 8.98339 17.0835 9.59277 17.0835ZM9.59277 12.7593H18.417C19.0146 12.7593 19.4248 12.4663 19.4248 11.8686C19.4248 11.271 19.0381 10.9663 18.417 10.9663H9.59277C8.95995 10.9663 8.57324 11.271 8.57324 11.8686C8.57324 12.4663 8.98339 12.7593 9.59277 12.7593Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37227">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EqualCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
