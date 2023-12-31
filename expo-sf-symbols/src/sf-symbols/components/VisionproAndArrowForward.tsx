
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="39" height="29" viewBox="0 0 39 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35537)">
<path d="M22.0795 19.8437C24.3178 19.8437 26.6499 23.6172 31.103 23.6172C35.4272 23.6172 38.685 19.6914 38.685 14.5352C38.685 6.08594 31.2553 5.14844 22.0795 5.14844C12.9038 5.14844 5.4624 6.09766 5.4624 14.5352C5.4624 19.6914 8.73193 23.6172 13.0444 23.6172C17.5092 23.6172 19.8295 19.8437 22.0795 19.8437ZM22.0795 17.957C18.7045 17.957 17.146 21.7304 13.0444 21.7304C9.59912 21.7304 7.34912 18.9882 7.34912 14.5352C7.34912 7.73828 13.103 7.03516 22.0795 7.03516C31.0444 7.03516 36.7983 7.72656 36.7983 14.5352C36.7983 18.9882 34.56 21.7304 31.103 21.7304C27.0131 21.7304 25.4545 17.957 22.0795 17.957Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.8256 17.0664C13.0913 17.0664 14.1225 16.0351 14.1225 14.7695C14.1225 13.5039 13.0913 12.4727 11.8256 12.4727H2.34522C1.07959 12.4727 0.0483398 13.5039 0.0483398 14.7695C0.0483398 16.0351 1.07959 17.0664 2.34522 17.0664H11.8256Z" fill="currentColor"/>
<path d="M2.35693 15.6955H11.8256L13.5952 15.6252L11.4389 17.6174C10.5483 18.4142 11.8022 19.6681 12.6108 18.8244L15.8686 15.4377C16.0913 15.2033 16.1733 15.0041 16.1733 14.7697C16.1733 14.5354 16.0913 14.3244 15.8686 14.0901L12.5991 10.6916C11.8022 9.84786 10.5014 11.0549 11.4389 11.9104L13.5952 13.9026L11.8256 13.8322H2.35693C1.86475 13.8322 1.45459 14.2658 1.45459 14.7697C1.45459 15.2736 1.86475 15.6955 2.35693 15.6955Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35537">
<rect width="38.6367" height="18.9023" fill="currentColor" transform="translate(0.0483398 5.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VisionproAndArrowForward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
