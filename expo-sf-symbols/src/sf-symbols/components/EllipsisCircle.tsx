
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
<g clip-path="url(#clip0_2207_34759)">
<path d="M14.0517 25.965C20.5908 25.965 26.0048 20.5393 26.0048 14.0119C26.0048 7.4729 20.5791 2.05884 14.04 2.05884C7.51269 2.05884 2.09863 7.4729 2.09863 14.0119C2.09863 20.5393 7.52441 25.965 14.0517 25.965ZM14.0517 23.9729C8.52051 23.9729 4.10254 19.5432 4.10254 14.0119C4.10254 8.48072 8.50879 4.05103 14.04 4.05103C19.5713 4.05103 24.0127 8.48072 24.0127 14.0119C24.0127 19.5432 19.583 23.9729 14.0517 23.9729Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.5128 15.6994C20.4385 15.6994 21.212 14.9377 21.212 14.0002C21.212 13.0627 20.4385 12.301 19.5128 12.301C18.5753 12.301 17.8135 13.0627 17.8135 14.0002C17.8135 14.9377 18.5753 15.6994 19.5128 15.6994Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.04 15.6994C14.9775 15.6994 15.7392 14.9377 15.7392 14.0002C15.7392 13.0627 14.9775 12.301 14.04 12.301C13.1025 12.301 12.3408 13.0627 12.3408 14.0002C12.3408 14.9377 13.1025 15.6994 14.04 15.6994Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.5791 15.6994C9.50488 15.6994 10.2666 14.9377 10.2666 14.0002C10.2666 13.0627 9.49316 12.301 8.5791 12.301C7.6416 12.301 6.87988 13.0627 6.87988 14.0002C6.87988 14.9377 7.6416 15.6994 8.5791 15.6994Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34759">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09863 2.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const EllipsisCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
