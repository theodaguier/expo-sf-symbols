
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
<g clip-path="url(#clip0_2207_33383)">
<path d="M8.26419 7.18701C9.68216 7.18701 10.8189 6.03858 10.8189 4.60889C10.8189 3.20264 9.68216 2.06592 8.26419 2.06592C6.85794 2.06592 5.69779 3.20264 5.69779 4.60889C5.69779 6.03858 6.85794 7.18701 8.26419 7.18701ZM25.5962 23.5229L17.8735 19.3511L13.4087 16.2456C13.0806 16.0229 12.7642 15.73 12.5064 15.4018C12.9634 15.1206 13.1509 14.605 13.022 14.1011L12.1431 10.5386C11.8267 9.28467 10.69 8.41748 9.40091 8.41748H6.61185C5.75638 8.41748 5.15872 8.62842 4.60794 9.1792L1.43216 12.355C1.04545 12.7417 0.986851 13.3393 1.25638 13.8081L3.48294 17.7104V24.5776C3.48294 25.2221 4.02201 25.7729 4.67826 25.7729C5.33451 25.7729 5.87357 25.2221 5.87357 24.5776V18.6831L12.7056 19.1753L16.8423 21.519L24.4712 25.6206C25.1743 25.9956 25.854 25.644 26.1001 25.1518C26.3931 24.5659 26.1704 23.8276 25.5962 23.5229ZM3.78763 13.4097L5.85013 11.3354L7.4556 15.4721L6.18997 16.1987H5.38138L3.78763 13.4097Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33383">
<rect width="25.1387" height="23.9414" fill="currentColor" transform="translate(1.09033 2.06592)"/>
</clipPath>
</defs>
</svg>

`;

export const FigureFlexibility = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
