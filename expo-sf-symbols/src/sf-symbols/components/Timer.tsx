
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
<g clip-path="url(#clip0_2207_36720)">
<path d="M14.0202 26.0488C20.5593 26.0488 25.9733 20.6231 25.9733 14.0957C25.9733 7.55664 20.571 2.14258 14.0319 2.14258C13.4109 2.14258 13.1062 2.51758 13.1062 3.12695V7.66211C13.1062 8.17774 13.4577 8.57617 13.9616 8.57617C14.4773 8.57617 14.8288 8.17774 14.8288 7.66211V3.10352L14.0085 4.13477C19.5632 4.13477 23.9694 8.56446 23.9694 14.0957C23.9694 19.627 19.5515 24.0567 14.0202 24.0567C8.48902 24.0567 4.04761 19.627 4.05933 14.0957C4.07105 11.623 4.94995 9.38477 6.42652 7.66211C6.77808 7.20508 6.80152 6.6543 6.4148 6.24414C6.02808 5.83399 5.38355 5.86914 4.94995 6.38477C3.1687 8.4707 2.06714 11.1777 2.06714 14.0957C2.06714 20.6231 7.49292 26.0488 14.0202 26.0488Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M15.8951 15.7834C16.8209 14.8108 16.6334 13.51 15.5201 12.7366L9.32093 8.40058C8.73499 7.99043 8.12561 8.61152 8.53577 9.18574L12.86 15.385C13.6451 16.4983 14.9459 16.6975 15.8951 15.7834Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36720">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06714 2.14258)"/>
</clipPath>
</defs>
</svg>

`;

export const Timer = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
