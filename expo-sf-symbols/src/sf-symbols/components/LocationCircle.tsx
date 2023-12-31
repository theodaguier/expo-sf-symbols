
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
<g clip-path="url(#clip0_2207_34446)">
<path d="M14.0371 25.997C20.5762 25.997 25.9902 20.5713 25.9902 14.0439C25.9902 7.50488 20.5645 2.09082 14.0254 2.09082C7.49804 2.09082 2.08398 7.50488 2.08398 14.0439C2.08398 20.5713 7.50976 25.997 14.0371 25.997ZM14.0371 24.0049C8.50586 24.0049 4.08789 19.5752 4.08789 14.0439C4.08789 8.5127 8.49414 4.08301 14.0254 4.08301C19.5567 4.08301 23.9981 8.5127 23.9981 14.0439C23.9981 19.5752 19.5684 24.0049 14.0371 24.0049Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.60362 15.0283L12.5138 15.04C12.7364 15.04 12.8888 15.1806 12.8888 15.415V20.2666C12.8888 21.3096 13.9903 21.415 14.3419 20.665L19.545 9.56732C19.9786 8.66498 19.1935 7.89154 18.2794 8.32514L7.2169 13.5752C6.45518 13.9385 6.57237 15.0283 7.60362 15.0283Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34446">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08398 2.09082)"/>
</clipPath>
</defs>
</svg>

`;

export const LocationCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
