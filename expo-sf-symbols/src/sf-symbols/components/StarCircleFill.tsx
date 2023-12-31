
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
<g clip-path="url(#clip0_2207_34402)">
<path d="M13.9573 26.0419C20.4964 26.0419 25.9104 20.6162 25.9104 14.0888C25.9104 7.5498 20.4846 2.13574 13.9455 2.13574C7.41821 2.13574 2.00415 7.5498 2.00415 14.0888C2.00415 20.6162 7.42993 26.0419 13.9573 26.0419Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4885 20.3349C9.78541 20.874 9.03541 20.3232 9.31666 19.4912L10.676 15.4013L7.17213 12.9052C6.51588 12.4248 6.73854 11.4873 7.62916 11.499L11.9299 11.5342L13.2425 7.4209C13.5003 6.6123 14.4144 6.6123 14.6722 7.4209L15.9847 11.5342L20.2854 11.499C21.1878 11.4873 21.387 12.4365 20.7425 12.8935L17.2386 15.4013L18.6097 19.4912C18.8792 20.3232 18.1409 20.874 17.4261 20.3349L13.9573 17.8037L10.4885 20.3349Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34402">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.00415 2.13574)"/>
</clipPath>
</defs>
</svg>

`;

export const StarCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
