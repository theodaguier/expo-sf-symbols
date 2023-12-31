
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
<g clip-path="url(#clip0_2207_35280)">
<path d="M13.9887 26.0103C20.5278 26.0103 25.9418 20.5962 25.9418 14.0571C25.9418 7.52979 20.5161 2.104 13.977 2.104C7.4497 2.104 2.03564 7.52979 2.03564 14.0571C2.03564 20.5962 7.46142 26.0103 13.9887 26.0103Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.62939 18.8501V14.0337C9.62939 13.1782 9.98095 12.7681 10.6841 12.7212V11.2915C10.6841 9.06494 12.02 7.57666 13.9887 7.57666C15.9575 7.57666 17.2934 9.06494 17.2934 11.2915V12.7212C17.9965 12.7681 18.3481 13.1782 18.3481 14.0337V18.8501C18.3481 19.7525 17.9497 20.1626 17.1176 20.1626H10.8599C10.0278 20.1626 9.62939 19.7525 9.62939 18.8501ZM11.9497 12.7095H16.0278V11.1509C16.0278 9.74462 15.2075 8.7954 13.9887 8.7954C12.77 8.7954 11.9497 9.74462 11.9497 11.1509V12.7095Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35280">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03564 2.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
