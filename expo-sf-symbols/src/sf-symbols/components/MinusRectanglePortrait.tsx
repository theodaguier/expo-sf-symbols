
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
<g clip-path="url(#clip0_2207_37207)">
<path d="M4.03992 22.5547C4.03992 25.0039 5.24695 26.2227 7.67273 26.2227H20.118C22.5438 26.2227 23.7508 25.0039 23.7508 22.5547V4.77735C23.7508 2.33985 22.5438 1.09766 20.118 1.09766H7.67273C5.24695 1.09766 4.03992 2.33985 4.03992 4.77735V22.5547ZM5.92664 22.5196V4.8125C5.92664 3.64063 6.54773 2.98438 7.76648 2.98438H20.0243C21.243 2.98438 21.8641 3.64063 21.8641 4.8125V22.5196C21.8641 23.6915 21.243 24.336 20.0243 24.336H7.76648C6.54773 24.336 5.92664 23.6915 5.92664 22.5196Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.31335 14.6563H18.5008C19.1571 14.6563 19.6141 14.3047 19.6141 13.6836C19.6141 13.0508 19.1922 12.6875 18.5008 12.6875H9.31335C8.63366 12.6875 8.18835 13.0508 8.18835 13.6836C8.18835 14.3047 8.6571 14.6563 9.31335 14.6563Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37207">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.03992 1.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MinusRectanglePortrait = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
