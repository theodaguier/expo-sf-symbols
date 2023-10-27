
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
<g clip-path="url(#clip0_2207_33132)">
<path d="M13.9553 25.9418C20.4944 25.9418 25.9084 20.5277 25.9084 13.9886C25.9084 7.4613 20.4827 2.03552 13.9436 2.03552C7.41626 2.03552 2.0022 7.4613 2.0022 13.9886C2.0022 20.5277 7.42798 25.9418 13.9553 25.9418Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.9436 19.2035C7.60375 19.2035 7.27563 18.9105 7.27563 18.348C7.27563 13.5316 9.32641 10.555 13.9788 10.555H14.1663V8.09411C14.1663 7.66052 14.4827 7.30896 14.9397 7.30896C15.2678 7.30896 15.467 7.43786 15.8069 7.76599L20.9397 12.559C21.1975 12.7933 21.2795 13.0277 21.2795 13.2504C21.2795 13.4847 21.1975 13.7191 20.9397 13.9535L15.8069 18.7816C15.5022 19.0629 15.2561 19.2035 14.928 19.2035C14.4827 19.2035 14.1663 18.8754 14.1663 18.4535V15.9574H13.9788C11.4592 15.9574 9.87719 16.6019 8.74047 18.723C8.52953 19.1332 8.22485 19.2035 7.9436 19.2035Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33132">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0022 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpRightCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
