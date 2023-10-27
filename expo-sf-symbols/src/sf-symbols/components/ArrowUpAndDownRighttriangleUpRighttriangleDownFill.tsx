
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
<g clip-path="url(#clip0_2207_37042)">
<path d="M26.5314 25.694V16.4479C26.5314 15.0534 25.8986 14.4205 24.5157 14.4205H10.5001C9.46886 14.4205 8.91808 15.194 8.91808 16.0143C8.91808 16.5885 9.1759 17.1276 9.72668 17.5026L23.7306 27.1002C24.1173 27.358 24.5392 27.4635 24.9493 27.4635C25.7931 27.4635 26.5314 26.901 26.5314 25.694ZM26.5314 1.78772C26.5314 0.580688 25.7931 0.0181885 24.9493 0.0181885C24.5392 0.0181885 24.1173 0.123657 23.7306 0.381469L9.72668 9.97913C9.1759 10.3541 8.91808 10.8932 8.91808 11.4557C8.91808 12.2877 9.46886 13.0612 10.5001 13.0612H24.5157C25.8986 13.0612 26.5314 12.4284 26.5314 11.0338V1.78772Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.19933 21.0651H4.68761V6.41664H6.19933C7.03136 6.41664 7.23058 5.76039 6.75011 5.10414L4.59386 2.15101C4.23058 1.64711 3.82043 1.65882 3.45715 2.15101L1.27746 5.10414C0.796988 5.76039 0.984488 6.41664 1.85167 6.41664H3.32824V21.0651H1.85167C0.996206 21.0651 0.796988 21.7213 1.28917 22.3659L3.45715 25.3307C3.82043 25.8229 4.23058 25.8346 4.59386 25.3307L6.76183 22.3659C7.23058 21.7213 7.04308 21.0651 6.19933 21.0651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37042">
<rect width="25.5126" height="27.457" fill="currentColor" transform="translate(1.0188 0.0181885)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpAndDownRighttriangleUpRighttriangleDownFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
