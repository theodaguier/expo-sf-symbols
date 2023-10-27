
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
<g clip-path="url(#clip0_2207_34423)">
<path d="M4.94531 25.0737C5.4375 25.0737 5.83594 24.687 5.83594 24.1948V17.6792C6.12891 17.5503 7.23047 17.1284 8.95313 17.1284C13.2891 17.1284 16.0078 19.2495 20.1328 19.2495C21.9609 19.2495 22.6406 19.0503 23.5313 18.6518C24.3399 18.2886 24.8672 17.6792 24.8672 16.601V4.70654C24.8672 4.07373 24.3281 3.71044 23.6485 3.71044C23.0742 3.71044 21.9961 4.20263 19.9805 4.20263C15.8555 4.20263 13.1484 2.08154 8.80078 2.08154C6.97266 2.08154 6.28125 2.28076 5.39063 2.6792C4.58203 3.04248 4.05469 3.65185 4.05469 4.71826V24.1948C4.05469 24.6753 4.46484 25.0737 4.94531 25.0737Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34423">
<rect width="20.8125" height="23.0039" fill="currentColor" transform="translate(4.05469 2.06982)"/>
</clipPath>
</defs>
</svg>

`;

export const FlagFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
