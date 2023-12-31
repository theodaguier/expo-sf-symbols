
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
<g clip-path="url(#clip0_2207_36782)">
<path d="M14.0035 25.9523C20.5426 25.9523 25.9566 20.5266 25.9566 13.9992C25.9566 7.4602 20.5309 2.04614 13.9918 2.04614C7.46447 2.04614 2.05042 7.4602 2.05042 13.9992C2.05042 20.5266 7.4762 25.9523 14.0035 25.9523Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0035 20.4914C10.4879 20.4914 7.53479 17.5266 7.53479 14.0109C7.53479 10.4836 10.4762 7.53052 14.0035 7.53052C17.5192 7.53052 20.484 10.4954 20.484 14.0109C20.484 17.5383 17.5309 20.4914 14.0035 20.4914ZM14.0035 18.593C16.5113 18.593 18.5738 16.5188 18.5738 14.0109C18.5738 11.5149 16.4996 9.42895 14.0035 9.42895C11.4957 9.42895 9.43322 11.5032 9.43322 14.0109C9.43322 16.507 11.5192 18.593 14.0035 18.593Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36782">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05042 2.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
