
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
<g clip-path="url(#clip0_2207_37351)">
<path d="M13.9741 25.9204C20.5132 25.9204 25.9272 20.4947 25.9272 13.9673C25.9272 7.42822 20.5015 2.01416 13.9624 2.01416C7.43506 2.01416 2.021 7.42822 2.021 13.9673C2.021 20.4947 7.44678 25.9204 13.9741 25.9204ZM13.9741 23.9283C8.44288 23.9283 4.02491 19.4986 4.02491 13.9673C4.02491 8.43604 8.43116 4.00635 13.9624 4.00635C19.4937 4.00635 23.9351 8.43604 23.9351 13.9673C23.9351 19.4986 19.5054 23.9283 13.9741 23.9283Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9741 8.00244C13.4702 8.00244 13.0952 8.36572 13.0952 8.88135V14.7408L13.189 17.2134L12.0171 15.8072L10.6226 14.4009C10.4585 14.2369 10.2476 14.1431 10.0015 14.1431C9.52099 14.1431 9.15771 14.5064 9.15771 14.9869C9.15771 15.233 9.22802 15.4439 9.38037 15.5962L13.2944 19.4869C13.5288 19.7212 13.728 19.8267 13.9741 19.8267C14.2319 19.8267 14.4429 19.7095 14.6655 19.4869L18.5679 15.5962C18.7202 15.4439 18.814 15.233 18.814 14.9869C18.814 14.5064 18.439 14.1431 17.9585 14.1431C17.7007 14.1431 17.4898 14.2251 17.3374 14.4009L15.9546 15.8072L14.7593 17.2251L14.853 14.7408V8.88135C14.853 8.36572 14.4898 8.00244 13.9741 8.00244Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37351">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
