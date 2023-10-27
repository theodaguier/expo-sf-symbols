
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
<g clip-path="url(#clip0_2207_34994)">
<path d="M8.6875 27.0117H18.6016C21.0156 27.0117 22.2344 25.7812 22.2344 23.3437V4.76953C22.2344 2.32031 21.0156 1.08984 18.6016 1.08984H8.6875C6.26172 1.08984 5.05469 2.32031 5.05469 4.76953V23.3437C5.05469 25.7812 6.26172 27.0117 8.6875 27.0117Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.20312 12.1992C8.41796 12.1992 8.10156 11.8945 8.10156 11.1093V5.32032C8.10156 4.53516 8.41796 4.23047 9.20312 4.23047H18.0274C18.8242 4.23047 19.1406 4.53516 19.1406 5.32032V11.1093C19.1406 11.8945 18.8242 12.1992 18.0274 12.1992H9.20312Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34994">
<rect width="17.1797" height="25.9336" fill="currentColor" transform="translate(5.05469 1.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LightswitchOnFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
