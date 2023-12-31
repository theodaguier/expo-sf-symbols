
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
<g clip-path="url(#clip0_2207_34424)">
<path d="M14.0035 25.976C20.5426 25.976 25.9566 20.5503 25.9566 14.0229C25.9566 7.48388 20.5309 2.06982 13.9918 2.06982C7.46447 2.06982 2.05042 7.48388 2.05042 14.0229C2.05042 20.5503 7.4762 25.976 14.0035 25.976ZM14.0035 23.9839C8.4723 23.9839 4.05433 19.5542 4.05433 14.0229C4.05433 8.4917 8.46057 4.06201 13.9918 4.06201C19.5231 4.06201 23.9645 8.4917 23.9645 14.0229C23.9645 19.5542 19.5348 23.9839 14.0035 23.9839Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.53869 20.3276C9.8551 20.3276 10.066 20.0815 10.066 19.7886V16.3315C10.2887 16.2378 10.7457 16.0971 11.4723 16.0971C13.5582 16.0971 14.8707 17.1284 16.8981 17.1284C17.7887 17.1284 18.152 17.0346 18.5973 16.8237C19.0895 16.601 19.3121 16.2612 19.3121 15.7339V9.95654C19.3121 9.6167 19.1363 9.3706 18.6559 9.3706C18.316 9.3706 17.8004 9.6167 16.8395 9.6167C14.8473 9.6167 13.5231 8.57373 11.4137 8.57373C10.4996 8.57373 10.1364 8.6792 9.71448 8.8667C9.23401 9.07763 8.98792 9.45263 8.98792 9.95654V19.7886C8.98792 20.0698 9.24572 20.3276 9.53869 20.3276Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34424">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05042 2.06982)"/>
</clipPath>
</defs>
</svg>

`;

export const FlagCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
