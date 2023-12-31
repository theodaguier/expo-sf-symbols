
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
<g clip-path="url(#clip0_2207_36781)">
<path d="M14.0014 25.9523C20.5405 25.9523 25.9545 20.5266 25.9545 13.9992C25.9545 7.4602 20.5288 2.04614 13.9897 2.04614C7.4624 2.04614 2.04834 7.4602 2.04834 13.9992C2.04834 20.5266 7.47412 25.9523 14.0014 25.9523ZM14.0014 23.9602C8.47022 23.9602 4.05225 19.5305 4.05225 13.9992C4.05225 8.46802 8.4585 4.03833 13.9897 4.03833C19.521 4.03833 23.9624 8.46802 23.9624 13.9992C23.9624 19.5305 19.5327 23.9602 14.0014 23.9602Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9897 20.2922C17.4116 20.2922 20.271 17.4328 20.271 14.0109C20.271 10.6008 17.3999 7.72974 13.9897 7.72974C10.5679 7.72974 7.72021 10.5891 7.72021 14.0109C7.72021 17.4211 10.5796 20.2922 13.9897 20.2922ZM13.9897 18.4641C11.5757 18.4641 9.54834 16.4367 9.54834 14.0109C9.54834 11.5735 11.5522 9.55787 13.9897 9.55787C16.4155 9.55787 18.4311 11.5852 18.4311 14.0109C18.4311 16.4484 16.4272 18.4641 13.9897 18.4641Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36781">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04834 2.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
