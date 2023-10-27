
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
<g clip-path="url(#clip0_2207_34425)">
<path d="M14.0056 25.9878C20.5447 25.9878 25.9587 20.5737 25.9587 14.0346C25.9587 7.50732 20.533 2.08154 13.9939 2.08154C7.46655 2.08154 2.05249 7.50732 2.05249 14.0346C2.05249 20.5737 7.47827 25.9878 14.0056 25.9878Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.41187 20.5268C9.10718 20.5268 8.83765 20.269 8.83765 19.9643V9.82764C8.83765 9.31202 9.09546 8.93702 9.58765 8.71436C10.0212 8.50342 10.3962 8.39795 11.3455 8.39795C13.5134 8.39795 14.8845 9.47608 16.9353 9.47608C17.9314 9.47608 18.4587 9.21827 18.8103 9.21827C19.3025 9.21827 19.49 9.47608 19.49 9.83936V15.7807C19.49 16.3315 19.2556 16.6831 18.7517 16.9292C18.2947 17.1284 17.9197 17.2221 16.9939 17.2221C14.908 17.2221 13.5486 16.1675 11.404 16.1675C10.654 16.1675 10.1853 16.3081 9.95093 16.4018V19.9643C9.95093 20.2807 9.73999 20.5268 9.41187 20.5268Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34425">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05249 2.06982)"/>
</clipPath>
</defs>
</svg>

`;

export const FlagCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
