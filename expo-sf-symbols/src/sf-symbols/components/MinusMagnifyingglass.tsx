
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
<g clip-path="url(#clip0_2207_33961)">
<path d="M3.0105 11.4492C3.0105 16.6055 7.20581 20.8008 12.3621 20.8008C14.4011 20.8008 16.2644 20.1446 17.7996 19.043L23.5652 24.8204C23.8347 25.0899 24.1863 25.2188 24.5613 25.2188C25.3582 25.2188 25.9089 24.6211 25.9089 23.836C25.9089 23.461 25.7683 23.1211 25.5222 22.875L19.7917 17.1094C20.9988 15.5391 21.7136 13.5821 21.7136 11.4492C21.7136 6.29297 17.5183 2.09766 12.3621 2.09766C7.20581 2.09766 3.0105 6.29297 3.0105 11.4492ZM5.01441 11.4492C5.01441 7.39454 8.30738 4.10157 12.3621 4.10157C16.4167 4.10157 19.7097 7.39454 19.7097 11.4492C19.7097 15.5039 16.4167 18.7969 12.3621 18.7969C8.30738 18.7969 5.01441 15.5039 5.01441 11.4492ZM9.35034 12.3047H15.3738C15.8425 12.3047 16.2293 11.918 16.2293 11.4492C16.2293 10.9805 15.8425 10.582 15.3738 10.582H9.35034C8.88159 10.582 8.48316 10.9805 8.48316 11.4492C8.48316 11.918 8.88159 12.3047 9.35034 12.3047Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33961">
<rect width="22.8984" height="23.1211" fill="currentColor" transform="translate(3.0105 2.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MinusMagnifyingglass = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
