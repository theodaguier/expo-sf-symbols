
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
<g clip-path="url(#clip0_2207_34326)">
<path d="M2.01465 22.1182C2.01465 23.9228 3.25684 25.3525 5.24903 25.3525H23.2841C25.2764 25.3525 26.5185 23.9228 26.5185 22.1182C26.5185 21.5791 26.3779 21.0283 26.0849 20.5244L17.0498 4.78613C16.4404 3.71973 15.3623 3.14551 14.2724 3.14551C13.1708 3.14551 12.0927 3.71973 11.4834 4.78613L2.44824 20.5361C2.15527 21.04 2.01465 21.5791 2.01465 22.1182ZM3.91309 22.1182C3.91309 21.9072 3.94824 21.6611 4.06543 21.415L7.5459 15.333H20.9521L24.4443 21.4267C24.5732 21.6611 24.6318 21.9072 24.6318 22.1182C24.6318 22.8447 24.0693 23.5127 23.2607 23.5127H5.26074C4.45215 23.5127 3.91309 22.8447 3.91309 22.1182Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34326">
<rect width="24.5039" height="22.2773" fill="currentColor" transform="translate(2.01465 3.14551)"/>
</clipPath>
</defs>
</svg>

`;

export const TriangleTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
