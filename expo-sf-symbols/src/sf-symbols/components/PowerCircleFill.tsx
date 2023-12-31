
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
<g clip-path="url(#clip0_2207_33535)">
<path d="M13.9909 26.0195C20.53 26.0195 25.944 20.5938 25.944 14.0664C25.944 7.52734 20.5183 2.11328 13.9792 2.11328C7.4519 2.11328 2.03784 7.52734 2.03784 14.0664C2.03784 20.5938 7.46362 26.0195 13.9909 26.0195Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0026 20.3945C10.5457 20.3945 7.66284 17.5117 7.66284 14.0664C7.66284 12.3203 8.43628 10.5859 9.74878 9.42578C10.5691 8.64062 11.7058 9.82422 10.8503 10.6211C9.8894 11.5117 9.35034 12.7305 9.35034 14.0664C9.35034 16.6563 11.4128 18.7305 14.0026 18.7305C16.5925 18.7305 18.6667 16.6563 18.6667 14.0664C18.655 12.7305 18.1042 11.5117 17.155 10.6328C16.2995 9.83594 17.4362 8.65234 18.2683 9.42578C19.569 10.6094 20.3425 12.3321 20.3425 14.0664C20.3425 17.5117 17.4597 20.3945 14.0026 20.3945ZM14.0026 14.336C13.5339 14.336 13.2058 13.9961 13.2058 13.5156V8.23047C13.2058 7.73828 13.5339 7.39844 14.0026 7.39844C14.4714 7.39844 14.8112 7.73828 14.8112 8.23047V13.5156C14.8112 13.9961 14.4714 14.336 14.0026 14.336Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33535">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03784 2.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const PowerCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
