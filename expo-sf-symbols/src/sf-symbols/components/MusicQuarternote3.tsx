
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
<g clip-path="url(#clip0_2207_33930)">
<path d="M20.3388 22.3975C20.3388 24.2022 21.7216 25.4561 23.6787 25.4561C25.4013 25.4561 27.9912 24.1787 27.9912 20.7568V8.86231C27.9912 8.44043 27.6279 8.07715 27.206 8.07715C26.7724 8.07715 26.4091 8.44043 26.4091 8.86231V17.4756C26.4091 18.0615 26.1748 18.4365 25.6708 18.5303L23.7958 18.9287C21.4404 19.4209 20.3388 20.6162 20.3388 22.3975Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.6553 16.4209C11.6553 18.2139 13.0499 19.4795 14.9952 19.4795C16.7295 19.4795 19.3076 18.2022 19.3076 14.7686V2.88574C19.3076 2.45215 18.956 2.10059 18.5224 2.10059C18.0888 2.10059 17.7255 2.45215 17.7255 2.88574V11.499C17.7255 12.0732 17.503 12.4483 16.9874 12.5537L15.1241 12.9404C12.7569 13.4326 11.6553 14.6279 11.6553 16.4209Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.01465 22.3975C1.01465 24.2022 2.40918 25.4561 4.35449 25.4561C6.08887 25.4561 8.66699 24.1787 8.66699 20.7568V8.86231C8.66699 8.44043 8.31543 8.07715 7.88184 8.07715C7.44824 8.07715 7.08496 8.44043 7.08496 8.86231V17.4756C7.08496 18.0498 6.86231 18.4365 6.34668 18.5303L4.4834 18.917C2.11621 19.4209 1.01465 20.6045 1.01465 22.3975Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33930">
<rect width="26.9766" height="23.3789" fill="currentColor" transform="translate(1.01465 2.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const MusicQuarternote3 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
