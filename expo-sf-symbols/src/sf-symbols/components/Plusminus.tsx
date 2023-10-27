
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
<g clip-path="url(#clip0_2207_37211)">
<path d="M7.07983 10.9673C7.07983 11.5415 7.54858 12.0103 8.1228 12.0103H13.1267V16.8384C13.1267 17.4009 13.5955 17.8579 14.1697 17.8579C14.7439 17.8579 15.2244 17.4009 15.2244 16.8384V12.0103H20.2282C20.8025 12.0103 21.2712 11.5415 21.2712 10.9673C21.2712 10.3931 20.8025 9.9126 20.2282 9.9126H15.2244V5.14307C15.2244 4.56885 14.7439 4.11182 14.1697 4.11182C13.5955 4.11182 13.1267 4.56885 13.1267 5.14307V9.9126H8.1228C7.54858 9.9126 7.07983 10.3931 7.07983 10.9673ZM7.07983 22.6391C7.07983 23.2251 7.5603 23.6938 8.1228 23.6938H20.2282C20.7907 23.6938 21.2712 23.2251 21.2712 22.6391C21.2712 22.0649 20.7907 21.5962 20.2282 21.5962H8.1228C7.5603 21.5962 7.07983 22.0649 7.07983 22.6391Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37211">
<rect width="14.1914" height="19.582" fill="currentColor" transform="translate(7.07983 4.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const Plusminus = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
