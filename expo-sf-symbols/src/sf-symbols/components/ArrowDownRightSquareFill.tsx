
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
<g clip-path="url(#clip0_2207_37390)">
<path d="M6.70288 24.6131H20.9177C23.3787 24.6131 24.5974 23.3943 24.5974 20.9802V6.67163C24.5974 4.25757 23.3787 3.03882 20.9177 3.03882H6.70288C4.25366 3.03882 3.02319 4.24585 3.02319 6.67163V20.9802C3.02319 23.406 4.25366 24.6131 6.70288 24.6131Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.6013 10.8083C18.1287 10.8083 18.492 11.2068 18.492 11.781V17.4763C18.492 18.1912 18.0935 18.4724 17.4724 18.4724H11.7537C11.1794 18.4724 10.8162 18.1209 10.8162 17.5818C10.8162 17.0545 11.1912 16.7029 11.7771 16.7029H13.9568L15.7498 16.8904L13.863 15.1209L9.42163 10.7029C9.24585 10.5271 9.14038 10.281 9.14038 10.0466C9.14038 9.49585 9.49194 9.14429 10.0193 9.14429C10.3123 9.14429 10.5466 9.24976 10.7224 9.42554L15.1404 13.8552L16.8865 15.7185L16.7107 13.8318V11.7576C16.7107 11.1716 17.0623 10.8083 17.6013 10.8083Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37390">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02319 3.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownRightSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
