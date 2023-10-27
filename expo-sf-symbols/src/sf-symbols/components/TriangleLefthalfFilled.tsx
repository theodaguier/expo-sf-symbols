
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
<g clip-path="url(#clip0_2207_34324)">
<path d="M2.0105 22.1182C2.0105 23.9228 3.25269 25.3525 5.24488 25.3525H23.28C25.2722 25.3525 26.5144 23.9228 26.5144 22.1182C26.5144 21.5791 26.3738 21.04 26.0808 20.5361L17.0457 4.78613C16.4363 3.71973 15.3582 3.14551 14.2566 3.14551C13.1667 3.14551 12.0886 3.71973 11.4792 4.78613L2.44409 20.5244C2.16284 21.0283 2.0105 21.5791 2.0105 22.1182ZM14.2566 23.5127V5.02051C14.7136 5.02051 15.1824 5.23145 15.4402 5.67676L24.4636 21.415C24.5808 21.6611 24.616 21.9072 24.616 22.1182C24.616 22.8447 24.0769 23.5127 23.2683 23.5127H14.2566Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34324">
<rect width="24.5039" height="22.2773" fill="currentColor" transform="translate(2.0105 3.14551)"/>
</clipPath>
</defs>
</svg>

`;

export const TriangleLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
