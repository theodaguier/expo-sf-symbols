
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
<g clip-path="url(#clip0_2207_33810)">
<path d="M13.9699 25.965C20.509 25.965 25.923 20.5393 25.923 14.0119C25.923 7.4729 20.4973 2.05884 13.9582 2.05884C7.43091 2.05884 2.01685 7.4729 2.01685 14.0119C2.01685 20.5393 7.44263 25.965 13.9699 25.965ZM13.9699 23.9729C8.43873 23.9729 4.02076 19.5432 4.02076 14.0119C4.02076 8.48072 8.42701 4.05103 13.9582 4.05103C19.4895 4.05103 23.9309 8.48072 23.9309 14.0119C23.9309 19.5432 19.5012 23.9729 13.9699 23.9729Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9582 19.7541C16.3606 19.7541 17.9895 18.1955 17.9895 15.8635C17.9895 14.7033 17.4973 13.6721 17.1457 12.8752C16.5129 11.5042 15.4699 9.7815 14.5559 8.39868C14.3918 8.12915 14.1926 8.01196 13.9582 8.01196C13.7238 8.01196 13.5363 8.12915 13.3606 8.39868C12.4465 9.7815 11.4153 11.5042 10.7708 12.8752C10.4192 13.6721 9.92701 14.7033 9.92701 15.8635C9.92701 18.1955 11.5559 19.7541 13.9582 19.7541Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33810">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01685 2.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const DropCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
