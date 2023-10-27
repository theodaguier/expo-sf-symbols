
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
<g clip-path="url(#clip0_2207_34368)">
<path d="M13.9867 25.9843C20.5258 25.9843 25.9398 20.5586 25.9398 14.0312C25.9398 7.49219 20.5141 2.07812 13.975 2.07812C7.44763 2.07812 2.03357 7.49219 2.03357 14.0312C2.03357 20.5586 7.45935 25.9843 13.9867 25.9843ZM13.9867 23.9922C8.45545 23.9922 4.03748 19.5625 4.03748 14.0312C4.03748 8.50001 8.44373 4.07032 13.975 4.07032C19.5063 4.07032 23.9477 8.50001 23.9477 14.0312C23.9477 19.5625 19.518 23.9922 13.9867 23.9922Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.1742 8.86328C9.18201 8.86328 7.75232 10.3633 7.75232 12.4375C7.75232 15.5195 10.9984 18.3554 13.4008 19.8789C13.6117 19.9961 13.8578 20.1601 14.0102 20.1601C14.1625 20.1601 14.3969 20.0078 14.5727 19.8789C16.9516 18.3203 20.2211 15.5195 20.2211 12.4375C20.2211 10.3633 18.7914 8.86328 16.7992 8.86328C15.557 8.86328 14.5727 9.57812 13.9867 10.6445C13.4008 9.57812 12.4281 8.86328 11.1742 8.86328Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34368">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03357 2.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HeartCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
