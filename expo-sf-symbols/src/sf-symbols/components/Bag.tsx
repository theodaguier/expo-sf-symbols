
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
<g clip-path="url(#clip0_2207_34763)">
<path d="M7.71753 25.6047H21.5105C23.6081 25.6047 24.8386 24.386 24.8386 21.9719V9.84302C24.8386 7.42895 23.5964 6.2102 21.1589 6.2102H7.71753C5.26831 6.2102 4.03784 7.41723 4.03784 9.84302V21.9719C4.03784 24.3977 5.26831 25.6047 7.71753 25.6047ZM7.74096 23.718C6.56909 23.718 5.92456 23.0969 5.92456 21.8782V9.93677C5.92456 8.71802 6.56909 8.09692 7.74096 8.09692H21.1237C22.2839 8.09692 22.9519 8.71802 22.9519 9.93677V21.8782C22.9519 23.0969 22.2839 23.718 21.4753 23.718H7.74096ZM9.81518 6.66723L11.7019 6.67895C11.7019 5.00317 12.8035 3.80786 14.4323 3.80786C16.0612 3.80786 17.1745 5.00317 17.1745 6.67895L19.0612 6.66723C19.0612 4.07739 17.0573 2.02661 14.4323 2.02661C11.8074 2.02661 9.81518 4.07739 9.81518 6.66723Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34763">
<rect width="20.8008" height="23.5898" fill="currentColor" transform="translate(4.03784 2.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const Bag = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
