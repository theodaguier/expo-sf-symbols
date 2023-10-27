
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
<g clip-path="url(#clip0_2207_36633)">
<path d="M5.9126 4.10938H7.63526V0.863281C7.63526 0.406249 7.23682 0.0546875 6.77979 0.0546875C6.32276 0.0546875 5.9126 0.406249 5.9126 0.863281V4.10938ZM6.77979 27.2188C7.23682 27.2188 7.63526 26.8672 7.63526 26.4102V23.3047H5.9126V26.4102C5.9126 26.8672 6.32276 27.2188 6.77979 27.2188ZM20.315 7.39063H22.0376V0.863281C22.0376 0.406249 21.6275 0.0546875 21.1704 0.0546875C20.7134 0.0546875 20.315 0.406249 20.315 0.863281V7.39063ZM21.1704 27.2188C21.6275 27.2188 22.0376 26.8672 22.0376 26.4102V19.9063H20.315V26.4102C20.315 26.8672 20.7134 27.2188 21.1704 27.2188Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.72901 24.2188H8.80713C10.5181 24.2188 11.4438 23.2695 11.4438 21.5235V5.75C11.4438 4.00391 10.5181 3.06641 8.80713 3.06641H4.72901C3.01807 3.06641 2.09229 4.00391 2.09229 5.75V21.5235C2.09229 23.2695 3.01807 24.2188 4.72901 24.2188ZM19.1314 20.7383H23.2095C24.9204 20.7383 25.8462 19.8008 25.8462 18.0547V9.21875C25.8462 7.47266 24.9204 6.53516 23.2095 6.53516H19.1314C17.4204 6.53516 16.4946 7.47266 16.4946 9.21875V18.0547C16.4946 19.8008 17.4204 20.7383 19.1314 20.7383Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36633">
<rect width="23.7539" height="27.1758" fill="currentColor" transform="translate(2.09229 0.0546875)"/>
</clipPath>
</defs>
</svg>

`;

export const DistributeHorizontalCenterFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
