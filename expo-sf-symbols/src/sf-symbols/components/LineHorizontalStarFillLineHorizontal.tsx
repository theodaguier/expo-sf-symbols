
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34405)">
<path d="M0.090332 24.4296C0.090332 24.9453 0.512207 25.3789 1.02783 25.3789H28.5434C29.0591 25.3789 29.4809 24.9453 29.4809 24.4296C29.4809 23.914 29.0591 23.4921 28.5434 23.4921H1.02783C0.512207 23.4921 0.090332 23.914 0.090332 24.4296ZM0.090332 4.03906C0.090332 4.55468 0.512207 4.97656 1.02783 4.97656H28.5434C29.0591 4.97656 29.4809 4.55468 29.4809 4.03906C29.4809 3.52344 29.0591 3.08984 28.5434 3.08984H1.02783C0.512207 3.08984 0.090332 3.52344 0.090332 4.03906Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.7623 19.6015L14.7974 17.3867L17.8209 19.6015C18.4068 20.0351 19.0982 19.6367 18.8404 18.8632L17.6568 15.3125L20.7506 13.0742C21.3834 12.6289 21.1021 11.8906 20.3873 11.8906H16.5552L15.4302 8.36328C15.2076 7.67187 14.3873 7.67187 14.1763 8.36328L13.0279 11.8906H9.18413C8.46929 11.8906 8.18804 12.6289 8.82085 13.0742L11.9381 15.3125L10.7427 18.8632C10.4849 19.6367 11.1763 20.0351 11.7623 19.6015Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34405">
<rect width="29.3906" height="22.3008" fill="currentColor" transform="translate(0.090332 3.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LineHorizontalStarFillLineHorizontal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
