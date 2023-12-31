
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
<g clip-path="url(#clip0_2207_35013)">
<path d="M6.74488 24.711H21.698C24.1472 24.711 25.3777 23.4922 25.3777 21.0781V6.76953C25.3777 4.35547 24.1472 3.13672 21.698 3.13672H6.74488C4.29566 3.13672 3.06519 4.34375 3.06519 6.76953V21.0781C3.06519 23.5039 4.29566 24.711 6.74488 24.711Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0261 13.7891C9.41675 13.7891 8.95972 13.3321 8.95972 12.7109V8.97266C8.95972 8.375 9.41675 7.88281 10.0261 7.88281C10.6238 7.88281 11.1042 8.375 11.1042 8.97266V12.7109C11.1042 13.3321 10.6238 13.7891 10.0261 13.7891ZM12.78 20.6211C12.405 20.6211 12.2175 20.4336 12.2175 20.0586V18.6992C12.2175 17.5742 13.0847 16.6719 14.2214 16.6719C15.3464 16.6719 16.2254 17.5742 16.2254 18.6992V20.0586C16.2254 20.4336 16.0379 20.6211 15.6629 20.6211H12.78ZM18.3933 13.7891C17.784 13.7891 17.3269 13.3321 17.3269 12.7109V8.97266C17.3269 8.375 17.784 7.88281 18.3933 7.88281C19.0027 7.88281 19.4832 8.375 19.4832 8.97266V12.7109C19.4832 13.3321 19.0027 13.7891 18.3933 13.7891Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35013">
<rect width="22.3125" height="21.5977" fill="currentColor" transform="translate(3.06519 3.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeBFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
