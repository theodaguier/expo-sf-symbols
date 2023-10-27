
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
<g clip-path="url(#clip0_2207_34657)">
<path d="M13.9741 26.0274C20.5132 26.0274 25.9272 20.6133 25.9272 14.0742C25.9272 7.54688 20.5015 2.12109 13.9624 2.12109C7.43506 2.12109 2.021 7.54688 2.021 14.0742C2.021 20.6133 7.44678 26.0274 13.9741 26.0274Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0444 16.8984C8.22021 14.0859 6.42724 10.5 8.54833 8.36714C8.59521 8.32027 8.64208 8.27339 8.7124 8.22652C9.52099 7.62886 10.271 7.48824 10.7632 8.20308L12.2515 10.3007C12.7554 11.0156 12.6499 11.4492 12.0874 12.0234L11.6187 12.5273C11.4663 12.6913 11.5249 12.9023 11.5952 13.0429C11.8413 13.4531 12.4272 14.1796 13.0952 14.8476C13.7749 15.5273 14.478 16.0898 14.8999 16.3476C15.064 16.4413 15.3101 16.4648 15.439 16.3241L15.9194 15.8554C16.4585 15.3163 16.9272 15.1991 17.6421 15.6913C18.6148 16.3827 19.2124 16.7929 19.7749 17.2031C20.478 17.7304 20.3257 18.5507 19.7866 19.1601C19.7163 19.2421 19.6577 19.3241 19.5757 19.4062C17.4546 21.5273 13.8569 19.7343 11.0444 16.8984Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34657">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.10938)"/>
</clipPath>
</defs>
</svg>

`;

export const PhoneCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
