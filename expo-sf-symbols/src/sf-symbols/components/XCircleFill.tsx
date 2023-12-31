
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
<g clip-path="url(#clip0_2207_37716)">
<path d="M13.9825 26.0585C20.5216 26.0585 25.9356 20.6328 25.9356 14.1054C25.9356 7.5664 20.5099 2.15234 13.9708 2.15234C7.44348 2.15234 2.02942 7.5664 2.02942 14.1054C2.02942 20.6328 7.4552 26.0585 13.9825 26.0585Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3966 19.6484C9.88098 19.6484 9.49426 19.2851 9.49426 18.8046C9.49426 18.5585 9.55286 18.3945 9.7052 18.1718L12.7755 13.9296L9.88098 9.94531C9.68176 9.67578 9.62317 9.51172 9.62317 9.24218C9.62317 8.75 10.0568 8.33984 10.5724 8.33984C10.9825 8.33984 11.2169 8.49218 11.4982 8.8789L14.0646 12.6054H14.1232L16.6544 8.89062C16.9122 8.49218 17.1583 8.33984 17.5333 8.33984C18.0489 8.33984 18.4474 8.71484 18.4474 9.19531C18.4474 9.41796 18.3888 9.61718 18.213 9.83984L15.1661 13.9882L18.1896 18.125C18.3536 18.3359 18.4239 18.5117 18.4239 18.7578C18.4239 19.2851 18.0138 19.6484 17.463 19.6484C17.088 19.6484 16.8653 19.5078 16.5606 19.0859L13.9591 15.3711H13.9122L11.299 19.0859C10.9825 19.5078 10.7833 19.6484 10.3966 19.6484Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37716">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02942 2.15234)"/>
</clipPath>
</defs>
</svg>

`;

export const XCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
