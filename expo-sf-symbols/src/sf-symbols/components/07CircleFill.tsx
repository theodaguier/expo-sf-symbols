
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
<g clip-path="url(#clip0_2207_38008)">
<path d="M14.0224 25.9062C20.5615 25.9062 25.9755 20.4805 25.9755 13.9531C25.9755 7.41406 20.5498 2 14.0107 2C7.4834 2 2.06934 7.41406 2.06934 13.9531C2.06934 20.4805 7.49512 25.9062 14.0224 25.9062Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.6592 19.0859C8.24511 19.0859 7.53027 16.3906 7.53027 13.9531C7.53027 11.5156 8.24511 8.82031 10.6592 8.82031C13.0732 8.82031 13.7998 11.5156 13.7998 13.9531C13.7998 16.3906 13.0732 19.0859 10.6592 19.0859ZM10.6592 17.6445C11.6436 17.6445 12.0186 16.0508 12.0186 13.9531C12.0186 11.8438 11.6436 10.2617 10.6592 10.2617C9.6748 10.2617 9.2998 11.8438 9.2998 13.9531C9.2998 16.0508 9.6748 17.6445 10.6592 17.6445ZM16.5537 19.0039C15.9677 19.0039 15.7568 18.6055 15.7568 18.2539C15.7568 17.9609 15.792 17.8086 15.8974 17.5391L18.5693 10.6133V10.5078H15.4638C15.0537 10.5078 14.7724 10.2031 14.7724 9.78125C14.7724 9.37109 15.0537 9.06641 15.4638 9.06641H19.3779C19.917 9.06641 20.3388 9.44141 20.3388 10.0039C20.3388 10.3555 20.2568 10.6484 20.1162 11.0234L17.3623 18.3828C17.1982 18.8281 16.999 19.0039 16.5537 19.0039Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_38008">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2)"/>
</clipPath>
</defs>
</svg>

`;

export const 07CircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
