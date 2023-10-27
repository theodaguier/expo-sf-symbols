
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
<g clip-path="url(#clip0_2207_35049)">
<path d="M13.993 26.0209C20.5321 26.0209 25.9461 20.5952 25.9461 14.0678C25.9461 7.52881 20.5204 2.11475 13.9813 2.11475C7.45398 2.11475 2.03992 7.52881 2.03992 14.0678C2.03992 20.5952 7.4657 26.0209 13.993 26.0209Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.07117 16.2709C7.80554 16.2709 6.79773 15.2397 6.79773 13.9858C6.79773 12.7202 7.80554 11.7007 9.07117 11.7007C10.3368 11.7007 11.3563 12.7202 11.3563 13.9858C11.3563 15.2397 10.3368 16.2709 9.07117 16.2709ZM18.9149 16.2709C17.6493 16.2709 16.6297 15.2397 16.6297 13.9858C16.6297 12.7202 17.6493 11.7007 18.9149 11.7007C20.1805 11.7007 21.1883 12.7202 21.1883 13.9858C21.1883 15.2397 20.1805 16.2709 18.9149 16.2709ZM12.5516 18.4741H15.4344C15.8094 18.4741 15.9969 18.6616 15.9969 19.0366V19.9155C15.9969 21.0288 15.118 21.9194 13.993 21.9194C12.8563 21.9194 11.9891 21.0405 11.9891 19.9155V19.0366C11.9891 18.6616 12.1766 18.4741 12.5516 18.4741Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35049">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03992 2.11475)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeKFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
