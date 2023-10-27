
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
<g clip-path="url(#clip0_2207_34633)">
<path d="M8.05762 26.9455C8.51465 26.9455 8.85449 26.7111 9.40527 26.1955L13.6358 22.3283H21.5576C25.0498 22.3283 26.9248 20.4065 26.9248 16.9729V7.99634C26.9248 4.56275 25.0498 2.62915 21.5576 2.62915H6.46387C2.97168 2.62915 1.09668 4.55103 1.09668 7.99634V16.9729C1.09668 20.4182 2.97168 22.3283 6.46387 22.3283H7.01465V25.7385C7.01465 26.465 7.38965 26.9455 8.05762 26.9455Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.9405 14.2072C18.9795 14.2072 18.2061 13.4338 18.2061 12.4729C18.2061 11.5119 18.9795 10.7385 19.9405 10.7385C20.9014 10.7385 21.6748 11.5119 21.6748 12.4729C21.6748 13.4338 20.9014 14.2072 19.9405 14.2072Z" fill="currentColor"/>
<path d="M14.0225 14.2072C13.0615 14.2072 12.2764 13.4338 12.2764 12.4729C12.2764 11.5119 13.0615 10.7385 14.0225 10.7385C14.9717 10.7385 15.7569 11.5119 15.7569 12.4729C15.7569 13.4338 14.9717 14.2072 14.0225 14.2072Z" fill="currentColor"/>
<path d="M8.09277 14.2072C7.14356 14.2072 6.3584 13.4338 6.3584 12.4729C6.3584 11.5119 7.14356 10.7385 8.09277 10.7385C9.05371 10.7385 9.82715 11.5119 9.82715 12.4729C9.82715 13.4338 9.05371 14.2072 8.09277 14.2072Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34633">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1.09668 1.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const EllipsisBubbleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
