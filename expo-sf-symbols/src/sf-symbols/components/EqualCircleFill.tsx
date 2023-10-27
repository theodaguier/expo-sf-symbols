
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
<g clip-path="url(#clip0_2207_37228)">
<path d="M14.0244 25.9663C20.5635 25.9663 25.9775 20.5406 25.9775 14.0132C25.9775 7.47412 20.5518 2.06006 14.0127 2.06006C7.48535 2.06006 2.07129 7.47412 2.07129 14.0132C2.07129 20.5406 7.49707 25.9663 14.0244 25.9663Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.47754 17.189C8.84473 17.189 8.41113 16.8843 8.41113 16.2749C8.41113 15.6539 8.82129 15.3257 9.47754 15.3257H18.5596C19.2041 15.3257 19.6143 15.6539 19.6143 16.2749C19.6143 16.8843 19.1807 17.189 18.5596 17.189H9.47754ZM9.47754 12.7242C8.84473 12.7242 8.41113 12.4195 8.41113 11.7983C8.41113 11.1772 8.82129 10.8608 9.47754 10.8608H18.5596C19.2041 10.8608 19.6143 11.1772 19.6143 11.7983C19.6143 12.4195 19.1807 12.7242 18.5596 12.7242H9.47754Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37228">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07129 2.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EqualCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
