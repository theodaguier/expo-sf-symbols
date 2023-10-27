
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
<g clip-path="url(#clip0_2207_35349)">
<path d="M14.0307 26.0307C20.5698 26.0307 25.9838 20.605 25.9838 14.0776C25.9838 7.53857 20.5581 2.12451 14.019 2.12451C7.4917 2.12451 2.07764 7.53857 2.07764 14.0776C2.07764 20.605 7.50342 26.0307 14.0307 26.0307ZM14.0307 24.0386C8.49952 24.0386 4.08155 19.6089 4.08155 14.0776C4.08155 8.54639 8.4878 4.1167 14.019 4.1167C19.5503 4.1167 23.9917 8.54639 23.9917 14.0776C23.9917 19.6089 19.562 24.0386 14.0307 24.0386Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.1207 19.9841L15.8472 16.7028C16.2222 16.5153 16.48 16.2575 16.6675 15.8942L19.9371 9.1794C20.3121 8.38252 19.7379 7.76143 18.9175 8.17159L12.2144 11.4411C11.8512 11.6052 11.6051 11.8513 11.4058 12.2497L8.11289 18.9763C7.73789 19.7497 8.34726 20.3591 9.1207 19.9841ZM14.0308 15.5192C13.2339 15.5192 12.6011 14.8747 12.6011 14.0895C12.6011 13.2927 13.2339 12.6481 14.0308 12.6481C14.8277 12.6481 15.4722 13.2927 15.4722 14.0895C15.4722 14.8747 14.8277 15.5192 14.0308 15.5192Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35349">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07764 2.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const Safari = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
