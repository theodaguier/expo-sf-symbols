
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="30" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35309)">
<path d="M14.5869 0.257812C10.415 0.257812 7.09863 3.57422 7.09863 7.72266C7.09863 10.8515 8.97363 13.6172 11.9033 14.7304V26.2968C11.9033 26.5898 11.9971 26.8125 12.208 27.0351L14.165 29.0039C14.3643 29.2031 14.7627 29.2617 15.0088 29.0156L18.7236 25.3008C18.9697 25.0429 18.958 24.7031 18.7236 24.457L16.415 22.1836L19.5791 19.0312C19.8017 18.7968 19.8017 18.457 19.5556 18.1992L16.4268 15.0468C20.0478 13.6054 22.0634 10.9336 22.0634 7.72266C22.0634 3.59766 18.7236 0.257812 14.5869 0.257812ZM14.5869 7.125C13.4971 7.125 12.6299 6.24609 12.6299 5.16797C12.6299 4.07812 13.4854 3.21094 14.5869 3.21094C15.665 3.21094 16.5439 4.07812 16.5439 5.16797C16.5439 6.24609 15.665 7.125 14.5869 7.125Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35309">
<rect width="14.9648" height="29.0939" fill="currentColor" transform="translate(7.09863 0.0839844)"/>
</clipPath>
</defs>
</svg>

`;

export const KeyFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
