
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
<g clip-path="url(#clip0_2207_33224)">
<path d="M2.0271 24.1782H17.742C18.9959 24.1782 19.7459 23.5923 19.7459 22.6196C19.7459 19.5962 15.9607 15.4243 9.87866 15.4243C3.80835 15.4243 0.0231934 19.5962 0.0231934 22.6196C0.0231934 23.5923 0.773193 24.1782 2.0271 24.1782ZM9.89038 13.3267C12.3982 13.3267 14.5779 11.0767 14.5779 8.14697C14.5779 5.25244 12.3982 3.10791 9.89038 3.10791C7.38257 3.10791 5.20288 5.29932 5.20288 8.17041C5.20288 11.0767 7.37085 13.3267 9.89038 13.3267Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.1248 14.0181C22.5232 14.0181 22.8396 13.8306 23.074 13.479L28.4294 5.0415C28.5701 4.81885 28.7107 4.54932 28.7107 4.2915C28.7107 3.77588 28.242 3.43604 27.7615 3.43604C27.4568 3.43604 27.1638 3.61182 26.9529 3.96338L22.0779 11.7564L19.7693 8.77979C19.4998 8.40479 19.2302 8.29932 18.9138 8.29932C18.3982 8.29932 17.9998 8.70947 17.9998 9.23682C17.9998 9.48291 18.1052 9.74072 18.2693 9.96338L21.1287 13.479C21.4334 13.854 21.738 14.0181 22.1248 14.0181Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33224">
<rect width="28.6875" height="21.082" fill="currentColor" transform="translate(0.0231934 3.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonFillCheckmark = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
