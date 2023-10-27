
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
<g clip-path="url(#clip0_2207_37612)">
<path d="M13.9741 26.0351C20.5132 26.0351 25.9272 20.6094 25.9272 14.082C25.9272 7.54297 20.5015 2.12891 13.9624 2.12891C7.43506 2.12891 2.021 7.54297 2.021 14.082C2.021 20.6094 7.44678 26.0351 13.9741 26.0351ZM13.9741 24.043C8.44288 24.043 4.02491 19.6133 4.02491 14.082C4.02491 8.55079 8.43116 4.1211 13.9624 4.1211C19.4937 4.1211 23.9351 8.55079 23.9351 14.082C23.9351 19.6133 19.5054 24.043 13.9741 24.043Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.88428 19.168C10.2124 19.168 10.4585 19.0391 10.7163 18.7812L18.5913 10.7891C18.8374 10.543 18.9898 10.25 18.9898 9.98046C18.9898 9.42968 18.5444 9.00781 18.0054 9.00781C17.7241 9.00781 17.4546 9.13671 17.1968 9.39452L9.3335 17.3867C9.07569 17.6445 8.93506 17.9258 8.93506 18.207C8.93506 18.7344 9.32178 19.168 9.88428 19.168Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37612">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.12891)"/>
</clipPath>
</defs>
</svg>

`;

export const SlashCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
