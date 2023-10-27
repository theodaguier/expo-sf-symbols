
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
<g clip-path="url(#clip0_2207_33515)">
<path d="M5.16504 16.6381C5.46972 16.6381 5.72754 16.5444 5.92675 16.3335L14.997 7.05225H13.5557L22.6259 16.3335C22.8252 16.5327 23.083 16.6381 23.3877 16.6381C24.0088 16.6381 24.4541 16.1811 24.4541 15.5717C24.4541 15.267 24.3369 15.0209 24.1377 14.81L15.0674 5.51709C14.8564 5.30616 14.5869 5.17725 14.2822 5.17725C13.9775 5.17725 13.708 5.29444 13.4854 5.51709L4.41504 14.81C4.2041 15.0209 4.09863 15.267 4.09863 15.5717C4.09863 16.1811 4.55566 16.6381 5.16504 16.6381ZM5.46972 5.21241H23.0595C23.6689 5.21241 24.0908 4.76709 24.0908 4.15772C24.0908 3.54834 23.6689 3.11475 23.0595 3.11475H5.46972C4.87207 3.11475 4.46191 3.54834 4.46191 4.15772C4.46191 4.76709 4.87207 5.21241 5.46972 5.21241Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33515">
<rect width="20.3555" height="21.5742" fill="currentColor" transform="translate(4.09863 3.11475)"/>
</clipPath>
</defs>
</svg>

`;

export const Projective = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
