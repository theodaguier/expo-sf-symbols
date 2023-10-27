
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
<g clip-path="url(#clip0_2207_33537)">
<path d="M14.0307 26.0488C20.5698 26.0488 25.9838 20.6231 25.9838 14.0957C25.9838 7.55664 20.5581 2.14258 14.019 2.14258C7.4917 2.14258 2.07764 7.55664 2.07764 14.0957C2.07764 20.6231 7.50342 26.0488 14.0307 26.0488ZM14.0307 24.0567C8.49952 24.0567 4.08155 19.627 4.08155 14.0957C4.08155 8.56446 8.4878 4.13477 14.019 4.13477C19.5503 4.13477 23.9917 8.56446 23.9917 14.0957C23.9917 19.627 19.562 24.0567 14.0307 24.0567Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0308 21.7246C14.5933 21.7246 14.98 21.3262 14.98 20.7403V7.45117C14.98 6.85352 14.5933 6.44336 14.0308 6.44336C13.4683 6.44336 13.0933 6.85352 13.0933 7.45117V20.7403C13.0933 21.3262 13.4683 21.7246 14.0308 21.7246Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33537">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07764 2.14258)"/>
</clipPath>
</defs>
</svg>

`;

export const Togglepower = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
