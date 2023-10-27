
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
<g clip-path="url(#clip0_2207_34136)">
<path d="M23.2656 4.49463C22.0703 3.29932 20.3828 3.11182 18.3789 3.11182H9.25C7.28125 3.11182 5.59375 3.29932 4.39843 4.49463C3.20312 5.68994 3.02734 7.36573 3.02734 9.33448V18.4634C3.02734 20.4673 3.20312 22.143 4.39843 23.3384C5.59375 24.5337 7.28125 24.7212 9.27343 24.7212H18.3789C20.3828 24.7212 22.0703 24.5337 23.2656 23.3384C24.4609 22.143 24.6367 20.4673 24.6367 18.4634V9.35791C24.6367 7.35401 24.4609 5.68994 23.2656 4.49463Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.08984 13.9282C8.08984 13.3188 8.51172 12.897 9.13281 12.897H12.8008V9.229C12.8008 8.61962 13.1992 8.18604 13.7968 8.18604C14.4062 8.18604 14.8281 8.61962 14.8281 9.229V12.897H18.5078C19.1054 12.897 19.539 13.3188 19.539 13.9282C19.539 14.5259 19.1054 14.9243 18.5078 14.9243H14.8281V18.604C14.8281 19.2134 14.4062 19.6352 13.7968 19.6352C13.1992 19.6352 12.8008 19.2016 12.8008 18.604V14.9243H9.13281C8.52343 14.9243 8.08984 14.5259 8.08984 13.9282Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34136">
<rect width="21.6094" height="21.6211" fill="currentColor" transform="translate(3.02734 3.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusAppFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
