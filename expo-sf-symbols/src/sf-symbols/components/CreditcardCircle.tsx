
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34787)">
<path d="M13.9614 25.958C20.5005 25.958 25.9145 20.5323 25.9145 14.0049C25.9145 7.46582 20.4888 2.05176 13.9497 2.05176C7.42236 2.05176 2.0083 7.46582 2.0083 14.0049C2.0083 20.5323 7.43408 25.958 13.9614 25.958ZM13.9614 23.9659C8.43018 23.9659 4.01221 19.5362 4.01221 14.0049C4.01221 8.47364 8.41846 4.04395 13.9497 4.04395C19.481 4.04395 23.9224 8.47364 23.9224 14.0049C23.9224 19.5362 19.4927 23.9659 13.9614 23.9659Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.05127 18.8565H18.8481C20.02 18.8565 20.6177 18.2706 20.6177 17.0987V12.7393H7.28174V17.0987C7.28174 18.2706 7.87939 18.8565 9.05127 18.8565ZM9.60205 17.0987C9.27392 17.0987 9.05127 16.876 9.05127 16.5596V15.5049C9.05127 15.1885 9.27392 14.9659 9.60205 14.9659H10.9966C11.3247 14.9659 11.5474 15.1885 11.5474 15.5049V16.5596C11.5474 16.876 11.3247 17.0987 10.9966 17.0987H9.60205ZM7.28174 11.4502H20.6177V10.9228C20.6177 9.7627 20.02 9.17676 18.8481 9.17676H9.05127C7.87939 9.17676 7.28174 9.75098 7.28174 10.9228V11.4502Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34787">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0083 2.05176)"/>
</clipPath>
</defs>
</svg>

`;

export const CreditcardCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
