
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
<g clip-path="url(#clip0_2207_37980)">
<path d="M13.9636 25.9062C20.5027 25.9062 25.9167 20.4805 25.9167 13.9531C25.9167 7.41406 20.491 2 13.9519 2C7.42456 2 2.0105 7.41406 2.0105 13.9531C2.0105 20.4805 7.43628 25.9062 13.9636 25.9062Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.1316 19.0859C7.71753 19.0859 6.99097 16.3906 6.99097 13.9531C6.99097 11.5156 7.71753 8.82031 10.1316 8.82031C12.5339 8.82031 13.2605 11.5156 13.2605 13.9531C13.2605 16.3906 12.5339 19.0859 10.1316 19.0859ZM10.1316 17.6445C11.116 17.6445 11.491 16.0508 11.491 13.9531C11.491 11.8438 11.116 10.2617 10.1316 10.2617C9.14722 10.2617 8.77222 11.8438 8.77222 13.9531C8.77222 16.0508 9.14722 17.6445 10.1316 17.6445ZM17.7957 19.0859C15.3933 19.0859 14.6667 16.3906 14.6667 13.9531C14.6667 11.5156 15.3933 8.82031 17.7957 8.82031C20.2097 8.82031 20.9363 11.5156 20.9363 13.9531C20.9363 16.3906 20.2097 19.0859 17.7957 19.0859ZM17.7957 17.6445C18.78 17.6445 19.155 16.0508 19.155 13.9531C19.155 11.8438 18.78 10.2617 17.7957 10.2617C16.8113 10.2617 16.4363 11.8438 16.4363 13.9531C16.4363 16.0508 16.8113 17.6445 17.7957 17.6445Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37980">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2)"/>
</clipPath>
</defs>
</svg>

`;

export const 00CircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
