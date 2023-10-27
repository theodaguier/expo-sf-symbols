
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34542)">
<path d="M23.236 23.3799C26.7751 23.3799 29.5407 20.79 29.5407 17.5674C29.5407 15.1065 28.1228 12.9736 25.8376 12.0127C25.861 6.78614 22.0993 3.0127 17.3064 3.0127C14.1306 3.0127 11.8689 4.71192 10.4626 6.7627C7.57983 5.91895 4.43921 8.11036 4.38061 11.3916C1.73217 11.8135 0.079834 14.1807 0.079834 17.04C0.079834 20.4854 3.09155 23.3799 7.09936 23.3799H23.236Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M15.0564 19.5831C12.361 19.5831 10.1931 17.4034 10.1931 14.6964C10.1931 14.298 10.5329 13.9581 10.9431 13.9581C11.365 13.9581 11.7048 14.298 11.7048 14.6964C11.7048 16.5714 13.1931 18.0831 15.0564 18.0831C16.9314 18.0831 18.4196 16.5714 18.4196 14.6964C18.4196 13.1378 17.365 11.8487 15.9353 11.462V12.8917C15.9353 13.4073 15.361 13.6183 14.9626 13.2667L12.7243 11.3331C12.3493 11.0049 12.361 10.5128 12.7243 10.2081L14.9626 8.29791C15.361 7.96978 15.9353 8.169 15.9353 8.69634V9.93853C18.1032 10.2784 19.9314 12.2354 19.9314 14.6612C19.9314 17.4034 17.7634 19.5831 15.0564 19.5831Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34542">
<rect width="29.4609" height="22.2773" fill="currentColor" transform="translate(0.079834 3.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowCounterclockwiseIcloudFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
