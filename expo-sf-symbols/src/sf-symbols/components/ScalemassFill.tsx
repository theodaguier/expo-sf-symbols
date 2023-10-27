
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
<g clip-path="url(#clip0_2207_36994)">
<path d="M2.26632 23.0425C1.65695 25.48 2.68819 26.8862 5.04366 26.8862H22.3171C24.6726 26.8862 25.7038 25.48 25.0945 23.0425L22.5046 12.5776C22.071 10.855 20.8288 9.85889 19.0827 9.85889H8.27804C6.53194 9.85889 5.27804 10.855 4.85616 12.5776L2.26632 23.0425ZM12.7312 11.23H14.6179V7.89013H12.7312V11.23ZM13.6804 8.8042C15.4968 8.8042 17.032 7.29248 17.032 5.47607C17.032 3.64795 15.4968 2.12451 13.6804 2.12451C11.8523 2.12451 10.3288 3.64795 10.3288 5.47607C10.3288 7.3042 11.864 8.8042 13.6804 8.8042ZM13.6804 7.17529C12.7546 7.17529 11.9694 6.40185 11.9694 5.47607C11.9694 4.55029 12.7429 3.75342 13.6804 3.75342C14.6062 3.75342 15.3913 4.55029 15.3913 5.47607C15.3913 6.40185 14.6179 7.17529 13.6804 7.17529Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36994">
<rect width="23.1718" height="24.7852" fill="currentColor" transform="translate(2.09448 2.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const ScalemassFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
