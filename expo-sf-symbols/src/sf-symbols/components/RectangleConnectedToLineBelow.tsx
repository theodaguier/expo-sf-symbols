
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
<g clip-path="url(#clip0_2207_36609)">
<path d="M6.71533 18.6738H20.7309C23.1801 18.6738 24.4106 17.455 24.4106 15.041V4.76367C24.4106 2.34961 23.1801 1.13086 20.7309 1.13086H6.71533C4.25439 1.13086 3.03564 2.34961 3.03564 4.76367V15.041C3.03564 17.455 4.25439 18.6738 6.71533 18.6738ZM6.73876 16.7871C5.59033 16.7871 4.92236 16.166 4.92236 14.9472V4.85742C4.92236 3.65039 5.59033 3.01758 6.73876 3.01758H20.6958C21.8559 3.01758 22.5239 3.65039 22.5239 4.85742V14.9472C22.5239 16.166 21.8559 16.7871 20.6958 16.7871H6.73876ZM12.7739 24.0644H14.6606V17.4668H12.7739V24.0644ZM3.97314 25.0019H23.4614C23.977 25.0019 24.4106 24.5683 24.4106 24.0527C24.4106 23.5371 23.977 23.1152 23.4614 23.1152H3.97314C3.45752 23.1152 3.03564 23.5371 3.03564 24.0527C3.03564 24.5683 3.45752 25.0019 3.97314 25.0019ZM13.7231 26.7949C15.2114 26.7949 16.4418 25.5644 16.4418 24.0761C16.4418 22.5761 15.2114 21.3457 13.7231 21.3457C12.2231 21.3457 10.9927 22.5761 10.9927 24.0761C10.9927 25.5644 12.2231 26.7949 13.7231 26.7949Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36609">
<rect width="21.375" height="25.6758" fill="currentColor" transform="translate(3.03564 1.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleConnectedToLineBelow = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
