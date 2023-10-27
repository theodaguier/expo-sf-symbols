
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
<g clip-path="url(#clip0_2207_36402)">
<path d="M14.0412 25.981C20.5803 25.981 25.9943 20.5669 25.9943 14.0278C25.9943 7.50049 20.5686 2.07471 14.0295 2.07471C7.50219 2.07471 2.08813 7.50049 2.08813 14.0278C2.08813 20.5669 7.51392 25.981 14.0412 25.981Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0412 18.9849C9.43579 18.9849 6.14282 15.2114 6.14282 14.0396C6.14282 12.856 9.40063 9.09424 14.0412 9.09424C18.6819 9.09424 21.9279 12.856 21.9279 14.0396C21.9279 15.2114 18.6936 18.9849 14.0412 18.9849ZM14.0412 17.2739C15.8342 17.2739 17.2873 15.7974 17.2873 14.0396C17.2873 12.2349 15.8342 10.8052 14.0412 10.8052C12.2365 10.8052 10.7834 12.2349 10.7952 14.0396C10.7952 15.7974 12.2365 17.2739 14.0412 17.2739ZM14.0529 15.4692C13.2795 15.4692 12.6115 14.7896 12.6115 14.0396C12.6115 13.2778 13.2795 12.6099 14.0529 12.6099C14.8147 12.6099 15.4709 13.2778 15.4709 14.0396C15.4709 14.7896 14.8147 15.4692 14.0529 15.4692Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36402">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08813 2.06299)"/>
</clipPath>
</defs>
</svg>

`;

export const EyeCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
