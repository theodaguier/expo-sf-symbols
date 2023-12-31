
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
<g clip-path="url(#clip0_2207_35036)">
<path d="M13.9658 26.0209C20.5049 26.0209 25.9189 20.5952 25.9189 14.0678C25.9189 7.52881 20.4932 2.11475 13.9541 2.11475C7.42675 2.11475 2.0127 7.52881 2.0127 14.0678C2.0127 20.5952 7.43848 26.0209 13.9658 26.0209ZM13.9658 24.0288C8.43458 24.0288 4.01661 19.5991 4.01661 14.0678C4.01661 8.53663 8.42285 4.10694 13.9541 4.10694C19.4854 4.10694 23.9268 8.53663 23.9268 14.0678C23.9268 19.5991 19.4971 24.0288 13.9658 24.0288Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.89161 15.7202C10.1221 15.7202 11.1064 14.7241 11.1064 13.5053C11.1064 12.2866 10.1221 11.2905 8.89161 11.2905C7.67286 11.2905 6.68848 12.2866 6.68848 13.5053C6.68848 14.7241 7.67286 15.7202 8.89161 15.7202ZM19.04 15.7202C20.2588 15.7202 21.2432 14.7241 21.2432 13.5053C21.2432 12.2866 20.2588 11.2905 19.04 11.2905C17.8096 11.2905 16.8252 12.2866 16.8252 13.5053C16.8252 14.7241 17.8096 15.7202 19.04 15.7202ZM13.9658 21.1811C15.1846 21.1811 16.1807 20.1967 16.1807 18.978C16.1807 17.7475 15.1846 16.7631 13.9658 16.7631C12.7471 16.7631 11.751 17.7475 11.751 18.978C11.751 20.1967 12.7471 21.1811 13.9658 21.1811Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35036">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0127 2.11475)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeH = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
