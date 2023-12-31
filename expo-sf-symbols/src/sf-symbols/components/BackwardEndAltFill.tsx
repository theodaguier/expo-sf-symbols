
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="39" height="29" viewBox="0 0 39 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33873)">
<path d="M1.57739 23.1164H4.24927C5.2688 23.1164 5.80786 22.5774 5.80786 21.5461V5.5852C5.80786 4.5188 5.2688 4.02661 4.24927 4.02661H1.57739C0.557861 4.02661 0.0187988 4.56567 0.0187988 5.5852V21.5461C0.0187988 22.5774 0.557861 23.1164 1.57739 23.1164ZM20.2219 22.7649C21.1477 22.7649 21.9094 22.0735 21.9094 20.761V6.37036C21.9094 5.05786 21.1477 4.35474 20.2219 4.35474C19.7415 4.35474 19.3547 4.50708 18.8743 4.78833L6.93286 11.8196C6.10083 12.3118 5.74927 12.886 5.74927 13.5657C5.74927 14.2336 6.10083 14.8196 6.93286 15.3118L18.8743 22.3313C19.3547 22.6125 19.7415 22.7649 20.2219 22.7649ZM36.3235 22.7649C37.2493 22.7649 38.011 22.0735 38.011 20.761V6.37036C38.011 5.05786 37.2493 4.35474 36.3235 4.35474C35.843 4.35474 35.4563 4.50708 34.9758 4.78833L23.0344 11.8196C22.2024 12.3118 21.8508 12.886 21.8508 13.5657C21.8508 14.2336 22.2024 14.8196 23.0344 15.3118L34.9758 22.3313C35.4563 22.6125 35.843 22.7649 36.3235 22.7649Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33873">
<rect width="37.9922" height="19.0898" fill="currentColor" transform="translate(0.0187988 4.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BackwardEndAltFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
