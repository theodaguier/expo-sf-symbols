
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
<g clip-path="url(#clip0_2207_36940)">
<path d="M23.5119 24.9576H27.0042C28.6214 24.9576 29.4534 24.1841 29.4534 22.649V5.36377C29.4534 3.82861 28.6214 3.04346 27.0042 3.04346H23.5119C21.9182 3.04346 21.0862 3.82861 21.0862 5.36377V22.649C21.0862 24.1841 21.9182 24.9576 23.5119 24.9576Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.9768 24.9576H16.4689C18.0861 24.9576 18.9064 24.1841 18.9064 22.649V8.78564C18.9064 7.25048 18.0861 6.46533 16.4689 6.46533H12.9768C11.3713 6.46533 10.5393 7.25048 10.5393 8.78564V22.649C10.5393 24.1841 11.3713 24.9576 12.9768 24.9576Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.44165 24.9576H5.92212C7.53931 24.9576 8.37134 24.1841 8.37134 22.649V12.1958C8.37134 10.6606 7.53931 9.87549 5.92212 9.87549H2.44165C0.836181 9.87549 0.00415039 10.6606 0.00415039 12.1958V22.649C0.00415039 24.1841 0.836181 24.9576 2.44165 24.9576Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36940">
<rect width="29.4492" height="22.0898" fill="currentColor" transform="translate(0.00415039 3.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const ChartBarFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
