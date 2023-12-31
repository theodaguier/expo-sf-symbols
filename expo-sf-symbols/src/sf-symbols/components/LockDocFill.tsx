
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
<g clip-path="url(#clip0_2207_33035)">
<path d="M7.67688 26.2173H20.1222C22.548 26.2173 23.755 24.9868 23.755 22.5493V11.9087H15.2707C13.7706 11.9087 13.0558 11.1939 13.0558 9.69384V1.09229H7.67688C5.26282 1.09229 4.04407 2.33448 4.04407 4.77198V22.5493C4.04407 24.9985 5.2511 26.2173 7.67688 26.2173ZM15.3058 10.3032H23.6144C23.5441 9.82276 23.2043 9.354 22.6418 8.77979L16.1847 2.20557C15.6339 1.64307 15.1535 1.30322 14.6613 1.22119V9.67041C14.6613 10.0923 14.8722 10.3032 15.3058 10.3032Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3253 22.6431V18.6939C10.3253 17.9907 10.6066 17.6509 11.1925 17.6157V16.4321C11.1925 14.6157 12.2941 13.397 13.9113 13.397C15.5285 13.397 16.63 14.6157 16.63 16.4321V17.6157C17.216 17.6509 17.5089 17.9907 17.5089 18.6939V22.6431C17.5089 23.3931 17.1808 23.7446 16.4777 23.7446H11.3448C10.6534 23.7446 10.3253 23.3931 10.3253 22.6431ZM12.2355 17.604H15.5871V16.3267C15.5871 15.1665 14.9191 14.3931 13.9113 14.3931C12.9034 14.3931 12.2355 15.1665 12.2355 16.3267V17.604Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33035">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.04407 1.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockDocFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
