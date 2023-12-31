
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
<g clip-path="url(#clip0_2207_33859)">
<path d="M13.9658 25.9328C20.5049 25.9328 25.9189 20.5071 25.9189 13.9797C25.9189 7.44067 20.4932 2.02661 13.9541 2.02661C7.42675 2.02661 2.0127 7.44067 2.0127 13.9797C2.0127 20.5071 7.43848 25.9328 13.9658 25.9328Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.36426 13.9914C5.36426 13.675 5.54004 13.3938 5.93848 13.1594L11.6924 9.7727C11.9268 9.63208 12.1025 9.57349 12.3369 9.57349C12.7822 9.57349 13.1455 9.88989 13.1455 10.5227V13.6282C13.2393 13.4524 13.3916 13.3 13.626 13.1594L19.3799 9.7727C19.6143 9.63208 19.8018 9.57349 20.0361 9.57349C20.4697 9.57349 20.8447 9.88989 20.8447 10.5227V17.4719C20.8447 18.1047 20.4697 18.4211 20.0361 18.4211C19.8018 18.4211 19.6143 18.3625 19.3799 18.2219L13.626 14.8352C13.3916 14.6946 13.2393 14.5422 13.1455 14.3664V17.4719C13.1455 18.1047 12.7822 18.4211 12.3369 18.4211C12.1025 18.4211 11.9268 18.3625 11.6924 18.2219L5.93848 14.8352C5.54004 14.6008 5.36426 14.3196 5.36426 13.9914Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33859">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0127 2.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BackwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
