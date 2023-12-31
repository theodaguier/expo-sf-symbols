
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
<g clip-path="url(#clip0_2207_37206)">
<path d="M3.71753 24.6719H23.9909C26.4519 24.6719 27.6706 23.4649 27.6706 21.0508V6.73047C27.6706 4.31641 26.4519 3.09766 23.9909 3.09766H3.71753C1.26831 3.09766 0.0378418 4.31641 0.0378418 6.73047V21.0508C0.0378418 23.4649 1.26831 24.6719 3.71753 24.6719Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.1316 14.9219C8.45191 14.9219 7.97144 14.5586 7.97144 13.9141C7.97144 13.2579 8.42847 12.8828 9.1316 12.8828H18.6003C19.3151 12.8828 19.7487 13.2579 19.7487 13.9141C19.7487 14.5586 19.28 14.9219 18.6003 14.9219H9.1316Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37206">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0378418 3.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MinusRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
