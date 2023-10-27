
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
<g clip-path="url(#clip0_2207_33699)">
<path d="M19.8526 27.6186L21.376 24.9818C21.587 24.6186 21.4698 24.2084 21.1182 24.0092C20.7667 23.7982 20.3682 23.9154 20.1573 24.2787L18.6104 26.9389C18.4229 27.2787 18.5167 27.6889 18.8799 27.8881C19.2315 28.0873 19.6534 27.9701 19.8526 27.6186Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.1847 24.3256L17.7082 21.6772C17.9191 21.3256 17.8019 20.9154 17.4503 20.7045C17.0988 20.5053 16.7003 20.6107 16.4894 20.974L14.9543 23.6459C14.755 23.974 14.8488 24.3842 15.2121 24.5951C15.5636 24.7943 15.9855 24.6654 16.1847 24.3256Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.5245 27.6303L12.048 24.9936C12.2589 24.6303 12.1535 24.2201 11.8019 24.0209C11.4386 23.81 11.0401 23.9272 10.8292 24.2904L9.29406 26.9506C9.09484 27.2904 9.20031 27.7006 9.55187 27.8998C9.90344 28.099 10.3253 27.9818 10.5245 27.6303Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.8566 24.3373L8.38004 21.6889C8.60269 21.3373 8.48551 20.9272 8.13394 20.7162C7.78238 20.517 7.38394 20.6225 7.16129 20.9857L5.62613 23.6576C5.42691 23.9857 5.53238 24.3959 5.89566 24.6068C6.23551 24.8061 6.65738 24.6772 6.8566 24.3373Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.55188 18.8529H21.0949C24.9386 18.8529 27.798 15.935 27.798 12.3256C27.798 8.58728 24.7511 5.85681 20.7785 5.85681C19.3136 2.96228 16.5949 1.099 13.2082 1.099C8.80188 1.099 5.16907 4.55603 4.78235 8.90369C2.66126 9.52478 1.04407 11.3647 1.04407 13.8373C1.04407 16.6147 3.05969 18.8529 6.55188 18.8529Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33699">
<rect width="26.7539" height="26.9475" fill="currentColor" transform="translate(1.04407 1.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const CloudDrizzleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
