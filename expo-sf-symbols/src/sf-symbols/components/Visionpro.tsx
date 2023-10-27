
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35525)">
<path d="M16.6633 19.8437C18.9016 19.8437 21.2336 23.6172 25.6867 23.6172C30.0109 23.6172 33.2688 19.6914 33.2688 14.5352C33.2688 6.08594 25.8273 5.14844 16.6633 5.14844C7.48755 5.14844 0.0461426 6.09766 0.0461426 14.5352C0.0461426 19.6914 3.30395 23.6172 7.62817 23.6172C12.0813 23.6172 14.4133 19.8437 16.6633 19.8437ZM16.6633 17.957C13.2766 17.957 11.7297 21.7304 7.62817 21.7304C4.17114 21.7304 1.93286 18.9882 1.93286 14.5352C1.93286 7.73828 7.68676 7.03516 16.6633 7.03516C25.6281 7.03516 31.382 7.72656 31.382 14.5352C31.382 18.9882 29.1438 21.7304 25.6867 21.7304C21.5852 21.7304 20.0383 17.957 16.6633 17.957Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.6633 17.957C13.2766 17.957 11.7297 21.7304 7.62817 21.7304C4.17114 21.7304 1.93286 18.9882 1.93286 14.5352C1.93286 7.73828 7.68676 7.03516 16.6633 7.03516C25.6281 7.03516 31.382 7.72656 31.382 14.5352C31.382 18.9882 29.1438 21.7304 25.6867 21.7304C21.5852 21.7304 20.0383 17.957 16.6633 17.957Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35525">
<rect width="33.2227" height="18.9023" fill="currentColor" transform="translate(0.0461426 5.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const Visionpro = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
