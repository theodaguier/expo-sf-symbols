
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37456)">
<path d="M0.384879 14.3958L4.13488 17.9465C4.92003 18.7083 5.963 18.1106 5.963 17.0911V14.6067H12.4669V21.134H9.97082C8.963 21.134 8.36535 22.1653 9.11535 22.9504L12.6661 26.7004C13.17 27.2278 13.8849 27.2043 14.3653 26.6887L17.9044 22.9504C18.6661 22.1653 18.0685 21.134 17.0489 21.134H14.5646V14.6067H21.0568V17.0911C21.0568 18.1106 22.088 18.7083 22.8849 17.9465L26.6232 14.4075C27.1271 13.9153 27.1505 13.2122 26.6349 12.7083L22.8849 9.15746C22.088 8.40746 21.0568 9.00512 21.0568 10.0129V12.509H14.5646V5.96996H17.0489C18.0685 5.96996 18.6661 4.93871 17.9044 4.15355L14.3536 0.403553C13.8614 -0.123791 13.1466 -0.100353 12.6544 0.415272L9.11535 4.15355C8.36535 4.93871 8.963 5.96996 9.97082 5.96996H12.4669V12.509H5.963V10.0129C5.963 9.00512 4.92003 8.40746 4.13488 9.15746L0.396598 12.6965C-0.107308 13.1887 -0.130746 13.8918 0.384879 14.3958Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37456">
<rect width="27.0032" height="27.1028" fill="currentColor" transform="translate(0.00830078 0.0181885)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpAndDownAndArrowLeftAndRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
