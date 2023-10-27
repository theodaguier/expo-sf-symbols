
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
<g clip-path="url(#clip0_2207_35262)">
<path d="M12.6924 6.31103H14.5791V3.07666C14.5791 2.56104 14.1572 2.12744 13.6416 2.12744C13.126 2.12744 12.6924 2.56104 12.6924 3.07666V6.31103ZM3.07129 14.6196C3.07129 16.1899 3.96191 17.0688 5.55567 17.0688H21.7275C23.3213 17.0688 24.2119 16.1899 24.2119 14.6196V7.38916C24.2119 5.81885 23.3213 4.95166 21.7275 4.95166H5.55567C3.96191 4.95166 3.07129 5.81885 3.07129 7.38916V14.6196ZM12.6924 16.4008V26.7368H14.5791V16.4008H12.6924ZM8.18067 25.8579C8.18067 26.3735 8.61426 26.7954 9.12988 26.7954H18.1533C18.6807 26.7954 19.1025 26.3735 19.1025 25.8579C19.1025 25.3422 18.6807 24.9086 18.1533 24.9086H9.12988C8.61426 24.9086 8.18067 25.3422 8.18067 25.8579Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.8292 13.6469C9.93856 13.6469 9.70418 13.0493 10.2081 12.3579L12.962 8.43213C13.3487 7.86963 13.9464 7.86963 14.3448 8.43213L17.0987 12.3696C17.5792 13.0493 17.3331 13.6469 16.4776 13.6469H10.8292Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35262">
<rect width="21.1406" height="24.6914" fill="currentColor" transform="translate(3.07129 2.12744)"/>
</clipPath>
</defs>
</svg>

`;

export const SignpostAndArrowtriangleUpFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
