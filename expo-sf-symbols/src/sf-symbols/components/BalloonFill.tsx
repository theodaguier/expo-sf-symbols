
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="33" viewBox="0 0 29 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35177)">
<path d="M13.6343 17.9797C17.8882 17.9797 21.2046 13.4563 21.2046 7.80786C21.2046 3.36645 18.1109 0.0266113 13.6343 0.0266113C9.15771 0.0266113 6.07568 3.36645 6.07568 7.80786C6.07568 13.4563 9.38037 17.9797 13.6343 17.9797ZM11.9937 17.1711L11.4429 19.2805C11.3257 19.7493 11.5718 20.2532 12.1694 20.2532H15.1108C15.7085 20.2532 15.9663 19.7493 15.8374 19.2805L15.2632 17.1711H11.9937ZM13.4937 31.9133C13.9507 31.9133 14.3257 31.5266 14.3257 31.0696C14.3257 28.5032 16.6577 27.9055 16.6577 25.3039C16.6577 22.6321 14.4077 22.1282 14.4312 19.7961H12.7671C12.7554 22.9836 15.0054 23.4758 15.0054 25.3039C15.0054 27.1672 12.6616 27.4485 12.6616 31.0696C12.6616 31.5266 13.0366 31.9133 13.4937 31.9133Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35177">
<rect width="15.1289" height="32.0508" fill="currentColor" transform="translate(6.07568 0.0266113)"/>
</clipPath>
</defs>
</svg>

`;

export const BalloonFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
