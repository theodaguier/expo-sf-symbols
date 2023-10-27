
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
<g clip-path="url(#clip0_2207_35657)">
<path d="M14.4451 26.162C20.9021 26.162 23.8787 23.8652 23.8787 18.6386V9.72066C23.8787 7.51754 23.3513 6.02926 22.5193 4.97457C22.238 4.62301 21.781 4.59957 21.4412 4.88082C20.3162 5.8652 17.3748 6.70895 14.4451 6.70895C11.5154 6.70895 8.57397 5.8652 7.46069 4.88082C7.10913 4.59957 6.66381 4.62301 6.38257 4.97457C5.55054 6.02926 5.02319 7.51754 5.02319 9.72066V18.6386C5.02319 23.8652 7.98803 26.162 14.4451 26.162ZM14.4451 24.2753C9.031 24.2753 6.90991 22.4589 6.90991 18.4511V9.82613C6.90991 8.79488 7.08569 7.83395 7.51928 7.00192C8.91381 8.09176 11.5505 8.59566 14.4451 8.59566C17.3513 8.59566 19.988 8.09176 21.3709 7.00192C21.8162 7.83395 21.992 8.79488 21.992 9.82613V18.4511C21.992 22.4589 19.8709 24.2753 14.4451 24.2753Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.4451 5.10352C17.5505 5.10352 19.8709 4.44727 19.8709 3.60352C19.8709 2.73633 17.5505 2.0918 14.4451 2.0918C11.3396 2.0918 9.03101 2.73633 9.03101 3.60352C9.03101 4.44727 11.3396 5.10352 14.4451 5.10352Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35657">
<rect width="18.8555" height="24.082" fill="currentColor" transform="translate(5.02319 2.08008)"/>
</clipPath>
</defs>
</svg>

`;

export const Homepod = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
