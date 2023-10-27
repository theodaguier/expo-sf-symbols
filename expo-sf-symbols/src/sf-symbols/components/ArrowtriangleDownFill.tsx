
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
<g clip-path="url(#clip0_2207_37607)">
<path d="M23.6865 5.45349C23.6865 4.5863 23.0186 4.04724 21.999 4.04724L6.71777 4.03552C5.69824 4.03552 5.04199 4.57458 5.04199 5.44177C5.04199 5.91052 5.25293 6.29724 5.4873 6.78942L12.7998 21.848C13.292 22.8441 13.7373 23.1605 14.3584 23.1605C14.9795 23.1605 15.4365 22.8441 15.9287 21.848L23.2295 6.78942C23.4756 6.30896 23.6865 5.92224 23.6865 5.45349Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37607">
<rect width="18.6445" height="19.1367" fill="currentColor" transform="translate(5.04199 4.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleDownFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
