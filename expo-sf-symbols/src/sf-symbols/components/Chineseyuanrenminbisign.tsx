
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37922)">
<path d="M14.0391 24.7492C14.6953 24.7492 15.1406 24.2805 15.1406 23.6125V15.5734L21.8438 4.7688C22.0195 4.49926 22.0781 4.28833 22.0781 4.03052C22.0781 3.46802 21.6094 3.04614 20.9883 3.04614C20.5664 3.04614 20.2383 3.22192 20.0039 3.63208L14.0859 13.5461H14.0039L8.08594 3.63208C7.83984 3.22192 7.51172 3.04614 7.08984 3.04614C6.48047 3.04614 6 3.46802 6 4.03052C6 4.28833 6.07031 4.49926 6.23438 4.7688L12.9492 15.5734V23.6125C12.9492 24.2805 13.3945 24.7492 14.0391 24.7492ZM8.41406 15.843H19.7695C20.2148 15.843 20.5078 15.5149 20.5078 15.0813C20.5078 14.6477 20.2148 14.3195 19.7695 14.3195H8.41406C7.96875 14.3195 7.67578 14.6477 7.67578 15.0813C7.67578 15.5149 7.96875 15.843 8.41406 15.843ZM8.41406 19.8625H19.7695C20.2148 19.8625 20.5078 19.5344 20.5078 19.1008C20.5078 18.6672 20.2266 18.3273 19.7695 18.3273H8.41406C7.96875 18.3273 7.67578 18.6672 7.67578 19.1008C7.67578 19.5227 7.96875 19.8625 8.41406 19.8625Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37922">
<rect width="16.0781" height="21.7148" fill="currentColor" transform="translate(6 3.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const Chineseyuanrenminbisign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
