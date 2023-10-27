
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
<g clip-path="url(#clip0_2207_37010)">
<path d="M8.98145 24.6309H18.8955C20.0791 24.6309 20.8057 23.9629 20.8057 22.709V22.4746C20.8057 19.6504 17.8174 16.6504 16.1768 15.0215C15.4385 14.2832 15.3799 13.4629 16.1768 12.666C17.8174 11.0488 20.8057 8.06055 20.8057 5.21289V5.01367C20.8057 3.75977 20.0791 3.08008 18.8955 3.08008H8.98145C7.79785 3.08008 7.07129 3.75977 7.07129 5.01367V5.21289C7.07129 8.06055 10.0713 11.0488 11.7002 12.666C12.4502 13.4043 12.5088 14.2246 11.7002 15.0215C10.0713 16.6504 7.07129 19.6504 7.07129 22.4746V22.709C7.07129 23.9629 7.79785 24.6309 8.98145 24.6309Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.88374 23.0371C9.37983 23.0371 9.26265 22.4512 9.60249 22.1348L13.3759 18.5371C13.7392 18.209 14.1611 18.2207 14.5009 18.5371L18.2743 22.1348C18.6142 22.4512 18.497 23.0371 17.9931 23.0371H9.88374Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37010">
<rect width="13.7344" height="21.5742" fill="currentColor" transform="translate(7.07129 3.08008)"/>
</clipPath>
</defs>
</svg>

`;

export const HourglassTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
