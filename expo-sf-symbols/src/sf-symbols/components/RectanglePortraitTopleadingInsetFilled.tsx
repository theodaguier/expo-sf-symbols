
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
<g clip-path="url(#clip0_2207_34278)">
<path d="M4.03357 22.5786C4.03357 25.0278 5.2406 26.2466 7.66638 26.2466H20.1117C22.5375 26.2466 23.7445 25.0278 23.7445 22.5786V4.80127C23.7445 2.36377 22.5375 1.12158 20.1117 1.12158H7.66638C5.2406 1.12158 4.03357 2.36377 4.03357 4.80127V22.5786ZM5.92029 22.5435V4.83642C5.92029 3.66455 6.54138 3.0083 7.76013 3.0083H20.018C21.2367 3.0083 21.8578 3.66455 21.8578 4.83642V22.5435C21.8578 23.7154 21.2367 24.3599 20.018 24.3599H7.76013C6.54138 24.3599 5.92029 23.7154 5.92029 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.56873 13.6841H12.8343C13.5843 13.6841 13.889 13.3911 13.889 12.6528V5.64502C13.889 4.90674 13.5843 4.61377 12.8343 4.61377H8.56873C7.83045 4.61377 7.52576 4.90674 7.52576 5.64502V12.6528C7.52576 13.3911 7.83045 13.6841 8.56873 13.6841Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34278">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.03357 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitTopleadingInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
