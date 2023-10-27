
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
<g clip-path="url(#clip0_2207_37702)">
<path d="M6.70484 24.7383H20.9196C23.3806 24.7383 24.5993 23.5195 24.5993 21.1054V6.79688C24.5993 4.38281 23.3806 3.16406 20.9196 3.16406H6.70484C4.25562 3.16406 3.02515 4.37109 3.02515 6.79688V21.1054C3.02515 23.5312 4.25562 24.7383 6.70484 24.7383Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.7946 19.5234C13.1618 19.5234 12.8337 19.0664 12.8337 18.4218V9.94922H9.86889C9.40014 9.94922 9.04858 9.63282 9.04858 9.15235C9.04858 8.64844 9.40014 8.35547 9.86889 8.35547H17.7673C18.236 8.35547 18.5876 8.64844 18.5876 9.15235C18.5876 9.63282 18.236 9.94922 17.7673 9.94922H14.7673V18.4218C14.7673 19.0898 14.4274 19.5234 13.7946 19.5234Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37702">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02515 3.14062)"/>
</clipPath>
</defs>
</svg>

`;

export const TSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
