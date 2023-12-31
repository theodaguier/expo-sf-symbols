
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
<g clip-path="url(#clip0_2207_36248)">
<path d="M13.9719 25.9133C20.511 25.9133 25.925 20.4876 25.925 13.9602C25.925 7.42114 20.4993 2.00708 13.9602 2.00708C7.43286 2.00708 2.0188 7.42114 2.0188 13.9602C2.0188 20.4876 7.44458 25.9133 13.9719 25.9133Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.6516 18.9993C11.2649 18.9993 10.8079 18.7766 10.8079 18.1321V16.9368H8.11255C7.51489 16.9368 7.11646 16.5383 7.11646 15.9524C7.11646 15.5774 7.18677 15.261 7.37427 14.7923L9.53052 10.1047C9.87036 9.35474 10.2805 8.92114 11.1243 8.92114C11.9329 8.92114 12.4719 9.38989 12.4719 10.2336V15.5305H12.9055C13.3977 15.5305 13.5969 15.8352 13.5969 16.2219C13.5969 16.6321 13.3626 16.9368 12.9055 16.9368H12.4719V18.1321C12.4719 18.718 12.0969 18.9993 11.6516 18.9993ZM10.843 15.5657V10.4446H10.7961L8.60473 15.4837V15.5657H10.843ZM15.929 18.8469C15.3782 18.8469 15.0735 18.5071 15.0735 17.9329V9.87036C15.0735 9.28442 15.3782 8.92114 15.9407 8.92114C16.5735 8.92114 16.8313 9.3313 16.8313 9.87036V17.3704H19.3626C19.8079 17.3704 20.136 17.6282 20.136 18.0969C20.136 18.5891 19.8079 18.8469 19.3626 18.8469H15.929Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36248">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 4lCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
