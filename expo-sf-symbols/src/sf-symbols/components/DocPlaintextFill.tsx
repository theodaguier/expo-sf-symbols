
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
<g clip-path="url(#clip0_2207_33059)">
<path d="M9.34278 7.67724C8.90918 7.67724 8.59278 7.3374 8.59278 6.91553C8.59278 6.50537 8.90918 6.18896 9.34278 6.18896H18.5185C18.9404 6.18896 19.2568 6.50537 19.2568 6.91553C19.2568 7.3374 18.9404 7.67724 18.5185 7.67724H9.34278ZM9.34278 11.896C8.90918 11.896 8.59278 11.5562 8.59278 11.1343C8.59278 10.7241 8.90918 10.4077 9.34278 10.4077H18.5185C18.9404 10.4077 19.2568 10.7241 19.2568 11.1343C19.2568 11.5562 18.9404 11.896 18.5185 11.896H9.34278ZM9.34278 16.1148C8.90918 16.1148 8.59278 15.7867 8.59278 15.3765C8.59278 14.9546 8.90918 14.6265 9.34278 14.6265H13.6787C14.124 14.6265 14.4287 14.9546 14.4287 15.3765C14.4287 15.7867 14.124 16.1148 13.6787 16.1148H9.34278ZM4.06934 22.5132C4.06934 24.9624 5.27637 26.1812 7.70215 26.1812H20.1474C22.5732 26.1812 23.7802 24.9624 23.7802 22.5132V4.73584C23.7802 2.29834 22.5732 1.05615 20.1474 1.05615H7.70215C5.27637 1.05615 4.06934 2.29834 4.06934 4.73584V22.5132Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33059">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.06934 1.05615)"/>
</clipPath>
</defs>
</svg>

`;

export const DocPlaintextFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
