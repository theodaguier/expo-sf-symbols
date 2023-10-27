
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37966)">
<path d="M6.74683 24.6048H20.9616C23.4226 24.6048 24.6413 23.386 24.6413 20.9719V6.66333C24.6413 4.24927 23.4226 3.03052 20.9616 3.03052H6.74683C4.29761 3.03052 3.06714 4.23755 3.06714 6.66333V20.9719C3.06714 23.3977 4.29761 24.6048 6.74683 24.6048Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.2312 19.5423C11.7039 19.5423 11.2703 19.179 11.2703 18.6633C11.2703 18.4173 11.3289 18.2532 11.446 18.0423L15.8757 9.90942V9.81567H10.7546C10.3328 9.81567 10.0281 9.49927 10.0281 9.06567C10.0281 8.62036 10.321 8.31567 10.7546 8.31567H16.6609C17.4577 8.31567 17.9851 8.81958 17.9851 9.48755C17.9851 9.74536 17.9265 9.99146 17.6921 10.4368L13.1921 18.8743C12.946 19.343 12.6531 19.5423 12.2312 19.5423Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37966">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06714 3.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 7SquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
