
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
<g clip-path="url(#clip0_2207_37182)">
<path d="M14.0454 25.9677C20.5845 25.9677 25.9985 20.542 25.9985 14.0146C25.9985 7.47558 20.5728 2.06152 14.0337 2.06152C7.50634 2.06152 2.09229 7.47558 2.09229 14.0146C2.09229 20.542 7.51807 25.9677 14.0454 25.9677Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0454 16.1943C13.4361 16.1943 13.0962 15.8545 13.0845 15.2334L12.9321 8.84668C12.9204 8.22558 13.3775 7.78027 14.0337 7.78027C14.6782 7.78027 15.1587 8.2373 15.147 8.8584L14.9829 15.2334C14.9712 15.8662 14.6314 16.1943 14.0454 16.1943ZM14.0454 20.1201C13.3423 20.1201 12.7329 19.5576 12.7329 18.8662C12.7329 18.1748 13.3306 17.6006 14.0454 17.6006C14.7603 17.6006 15.3579 18.1631 15.3579 18.8662C15.3579 19.5693 14.7485 20.1201 14.0454 20.1201Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37182">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09229 2.06152)"/>
</clipPath>
</defs>
</svg>

`;

export const ExclamationmarkCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
