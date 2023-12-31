
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
<g clip-path="url(#clip0_2207_34901)">
<path d="M4.40893 7.29688H6.29565V25.8476H4.40893V7.29688ZM20.8972 7.29688H22.7839V25.8476H20.8972V7.29688ZM3.65893 25.8476H23.5456C25.9714 25.8476 27.1667 24.6758 27.1667 22.2734V10.8711C27.1667 8.46875 25.9714 7.29688 23.5456 7.29688H3.65893C1.24487 7.29688 0.0378418 8.46875 0.0378418 10.8711V22.2734C0.0378418 24.6758 1.24487 25.8476 3.65893 25.8476ZM7.65503 8.31641H9.47143V6.24219C9.47143 5.35156 9.99878 4.84766 10.9128 4.84766H16.2917C17.2058 4.84766 17.7214 5.35156 17.7214 6.24219V8.29297H19.5378V6.3711C19.5378 4.16797 18.3776 3.13672 16.2566 3.13672H10.9362C8.93237 3.13672 7.65503 4.16797 7.65503 6.3711V8.31641Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34901">
<rect width="27.1289" height="22.7227" fill="currentColor" transform="translate(0.0378418 3.13672)"/>
</clipPath>
</defs>
</svg>

`;

export const SuitcaseFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
