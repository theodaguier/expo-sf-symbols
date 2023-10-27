
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36186)">
<path d="M30.1787 21.6252C31.0108 21.6252 31.7139 20.9455 31.7139 20.1487C31.7139 19.3401 31.0225 18.6721 30.1787 18.6721C29.3233 18.6721 28.6436 19.3401 28.6436 20.1487C28.6436 20.9455 29.3467 21.6252 30.1787 21.6252ZM30.1787 16.4221C30.7529 16.4221 31.1514 16.0237 31.1748 15.426L31.4209 7.12914C31.4444 6.37914 30.9522 5.87524 30.1787 5.87524C29.4053 5.87524 28.9014 6.37914 28.9248 7.12914L29.1709 15.426C29.1944 16.0237 29.6045 16.4221 30.1787 16.4221Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M21.249 24.4963C23.7217 24.4963 24.9287 23.3245 24.9287 20.8752V15.1448C24.9287 13.469 24.46 12.5666 23.1123 11.5471L14.0069 4.62134C12.46 3.46118 11.2647 3.05103 9.35449 3.05103H3.6709C1.30371 3.05103 0.0966797 4.24634 0.0966797 6.59009V20.8752C0.0966797 23.3245 1.29199 24.4963 3.77637 24.4963H21.249ZM21.1787 13.6916H3.70606C2.62793 13.6916 1.9834 13.0705 1.9834 11.9456V6.68384C1.9834 5.54712 2.61621 4.93775 3.70606 4.93775H9.35449C10.8545 4.93775 11.7217 5.19556 12.7178 5.99243L21.4483 12.6721C21.9287 13.0237 21.7998 13.6916 21.1787 13.6916Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36186">
<rect width="31.6172" height="21.457" fill="currentColor" transform="translate(0.0966797 3.03931)"/>
</clipPath>
</defs>
</svg>

`;

export const CarWindowLeftExclamationmark = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
