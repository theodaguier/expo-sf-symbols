
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37927)">
<path d="M13.9531 25.9062C20.4922 25.9062 25.9062 20.4805 25.9062 13.9531C25.9062 7.41406 20.4805 2 13.9414 2C7.41406 2 2 7.41406 2 13.9531C2 20.4805 7.42578 25.9062 13.9531 25.9062ZM13.9531 23.9141C8.42188 23.9141 4.00391 19.4844 4.00391 13.9531C4.00391 8.42188 8.41016 3.99219 13.9414 3.99219C19.4727 3.99219 23.9141 8.42188 23.9141 13.9531C23.9141 19.4844 19.4844 23.9141 13.9531 23.9141Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9414 19.5312C16.4258 19.5312 18.0898 17.293 18.0898 13.9531C18.0898 10.6133 16.4258 8.375 13.9414 8.375C11.4687 8.375 9.80469 10.6133 9.80469 13.9531C9.80469 17.293 11.4687 19.5312 13.9414 19.5312ZM13.9414 18.0312C12.5352 18.0312 11.5977 16.4023 11.5977 13.9531C11.5977 11.5039 12.5352 9.875 13.9414 9.875C15.3477 9.875 16.2852 11.5039 16.2852 13.9531C16.2852 16.4023 15.3477 18.0312 13.9414 18.0312Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37927">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2 2)"/>
</clipPath>
</defs>
</svg>

`;

export const 0Circle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
