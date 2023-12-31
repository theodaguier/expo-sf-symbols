
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36419)">
<path d="M0.0187988 13.9248C0.0187988 17.7334 3.94458 20.6045 8.76099 20.6045C12.218 20.6045 15.0188 19.3975 16.6594 17.1592C18.3118 19.3975 21.1008 20.6045 24.5579 20.6045C29.386 20.6045 33.3118 17.7334 33.3118 13.9248C33.3118 12.6123 32.925 11.792 32.1399 11.792C31.8704 11.792 31.5774 11.9561 31.3899 12.2373C30.7805 13.1162 29.761 13.5967 28.4954 13.5967C24.968 13.5967 23.9602 9.30762 19.7297 9.30762C17.6086 9.30762 16.1204 10.5264 15.8157 12.5186H17.5032C17.1985 10.5264 15.7219 9.30762 13.5891 9.30762C9.37036 9.30762 8.36255 13.5967 4.83521 13.5967C3.65161 13.5967 2.63208 13.1279 1.91724 12.2256C1.7063 11.9561 1.44849 11.792 1.17896 11.792C0.393799 11.792 0.0187988 12.6123 0.0187988 13.9248Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36419">
<rect width="33.293" height="12.5039" fill="currentColor" transform="translate(0.0187988 8.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const MustacheFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
