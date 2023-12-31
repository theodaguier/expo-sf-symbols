
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
<g clip-path="url(#clip0_2207_35195)">
<path d="M8.81934 15.2217H18.581V12.5381C18.581 10.4756 19.9638 8.95215 21.9209 8.95215H22.0498V6.58496C22.0498 5.0498 21.0537 4.04199 19.5888 4.04199H7.81153C6.33496 4.04199 5.33887 5.0498 5.33887 6.58496V8.95215H5.46778C7.43653 8.95215 8.81934 10.4756 8.81934 12.5381V15.2217ZM2.06934 19.6631C2.06934 21.1279 3.04199 22.1006 4.47168 22.1006H22.9287C24.3466 22.1006 25.331 21.1279 25.331 19.6631V12.5381C25.331 11.085 24.3466 10.1006 22.9287 10.1006H22.3427C20.9248 10.1006 19.9404 11.085 19.9404 12.5381V16.5811H7.44825V12.5381C7.44825 11.085 6.47559 10.1006 5.0459 10.1006H4.47168C3.04199 10.1006 2.06934 11.085 2.06934 12.5381V19.6631ZM6.20606 24.6084H6.94434C7.57715 24.6084 7.98731 24.21 7.98731 23.5772V21.0928H5.17481V23.5772C5.17481 24.21 5.57325 24.6084 6.20606 24.6084ZM20.456 24.6084H21.1826C21.8154 24.6084 22.2138 24.21 22.2138 23.5772V21.0928H19.4131V23.5772C19.4131 24.21 19.8232 24.6084 20.456 24.6084Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35195">
<rect width="23.2617" height="20.5898" fill="currentColor" transform="translate(2.06934 4.04199)"/>
</clipPath>
</defs>
</svg>

`;

export const ChairLoungeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
