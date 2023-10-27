
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
<g clip-path="url(#clip0_2207_35427)">
<path d="M14.2095 26.2236C19.2602 26.2236 22.4008 23.3174 22.4008 18.2666V8.64551C22.4008 6.78223 21.1704 5.59863 19.2133 5.59863H7.89307V3.03223C7.89307 2.5166 7.47119 2.08301 6.94385 2.08301C6.42822 2.08301 6.00635 2.5166 6.00635 3.03223V18.2666C6.00635 23.3174 9.14697 26.2236 14.2095 26.2236ZM14.2095 24.3838C10.354 24.3838 7.89307 22.1924 7.89307 18.3955V7.48535H18.9672C19.9516 7.48535 20.5141 8.02441 20.5141 8.9502V18.3955C20.5141 22.1924 18.0649 24.3838 14.2095 24.3838ZM10.0962 16.5674H18.311C18.9555 16.5674 19.3422 16.1807 19.3422 15.5596V9.67676C19.3422 9.04395 18.9555 8.65723 18.311 8.65723H10.0962C9.46338 8.65723 9.06494 9.04395 9.06494 9.67676V15.5596C9.06494 16.1807 9.46338 16.5674 10.0962 16.5674ZM12.5454 22.3682H15.8032C16.2485 22.3682 16.6001 22.0166 16.6001 21.5713C16.6001 21.126 16.2485 20.7744 15.8032 20.7744H12.5454C12.1118 20.7744 11.7485 21.126 11.7485 21.5713C11.7485 22.0166 12.1118 22.3682 12.5454 22.3682Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35427">
<rect width="16.3945" height="24.1523" fill="currentColor" transform="translate(6.00635 2.07129)"/>
</clipPath>
</defs>
</svg>

`;

export const Flipphone = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
