
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
<g clip-path="url(#clip0_2207_37677)">
<path d="M6.70484 24.6983H20.9196C23.3806 24.6983 24.5993 23.4795 24.5993 21.0654V6.75684C24.5993 4.34278 23.3806 3.12402 20.9196 3.12402H6.70484C4.25562 3.12402 3.02515 4.33106 3.02515 6.75684V21.0654C3.02515 23.4912 4.25562 24.6983 6.70484 24.6983ZM6.72827 22.8115C5.5564 22.8115 4.91187 22.1904 4.91187 20.9717V6.85059C4.91187 5.63184 5.5564 5.01075 6.72827 5.01075H20.8962C22.0563 5.01075 22.7126 5.63184 22.7126 6.85059V20.9717C22.7126 22.1904 22.0563 22.8115 20.8962 22.8115H6.72827Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2791 19.2608C10.8416 19.2608 11.1697 18.9209 11.1697 18.3233V11.5029H11.24L16.3493 18.6983C16.6657 19.1318 16.9001 19.2608 17.2868 19.2608C17.861 19.2608 18.2126 18.9092 18.2126 18.2881V9.24121C18.2126 8.65528 17.8845 8.30371 17.322 8.30371C16.7829 8.30371 16.4548 8.67871 16.4548 9.24121V16.1904H16.3845L11.2751 8.86621C10.9705 8.44434 10.7126 8.30371 10.3259 8.30371C9.7517 8.30371 9.42358 8.69043 9.42358 9.28809V18.3233C9.42358 18.8975 9.73998 19.2608 10.2791 19.2608Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37677">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02515 3.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const NSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
