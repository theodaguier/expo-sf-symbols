
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
<g clip-path="url(#clip0_2207_33124)">
<path d="M12.5205 24.5147C13.3174 24.5147 13.8916 23.9287 13.8916 23.1436V18.667H14.2315C18.7783 18.667 21.6377 19.8155 23.6885 23.6475C24.0986 24.3975 24.6377 24.5147 25.1299 24.5147C25.751 24.5147 26.3369 23.9522 26.3369 22.9444C26.3369 14.2842 22.669 8.88184 14.2315 8.88184H13.8916V4.45215C13.8916 3.66699 13.3174 3.02246 12.4971 3.02246C11.9229 3.02246 11.5361 3.26855 10.915 3.85449L1.66895 12.5029C1.21191 12.9365 1.07129 13.3702 1.07129 13.7686C1.07129 14.1553 1.22363 14.6006 1.66895 15.0225L10.915 23.753C11.4775 24.2803 11.9463 24.5147 12.5205 24.5147Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33124">
<rect width="25.2656" height="21.5039" fill="currentColor" transform="translate(1.07129 3.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpBackwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
