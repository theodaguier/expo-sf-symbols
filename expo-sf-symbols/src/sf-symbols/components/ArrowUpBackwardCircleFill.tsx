
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
<g clip-path="url(#clip0_2207_37363)">
<path d="M14.0183 25.9244C20.5574 25.9244 25.9714 20.4987 25.9714 13.9713C25.9714 7.43225 20.5457 2.01819 14.0066 2.01819C7.47925 2.01819 2.06519 7.43225 2.06519 13.9713C2.06519 20.4987 7.49097 25.9244 14.0183 25.9244Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2214 16.9713C9.6941 16.9713 9.33081 16.5612 9.33081 15.9987V10.3034C9.33081 9.5885 9.72925 9.30725 10.3504 9.30725H16.0691C16.6433 9.30725 17.0066 9.65881 17.0066 10.1979C17.0066 10.7252 16.6316 11.0768 16.0457 11.0768H13.866L12.073 10.8893L13.9597 12.6471L18.4011 17.0768C18.5769 17.2526 18.6941 17.4987 18.6941 17.733C18.6941 18.2838 18.3308 18.6354 17.8035 18.6354C17.5105 18.6354 17.2761 18.5299 17.1004 18.3541L12.6824 13.9244L10.9363 12.0612L11.1121 13.9479V16.0221C11.1121 16.5963 10.7605 16.9713 10.2214 16.9713Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37363">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06519 2.01819)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpBackwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
