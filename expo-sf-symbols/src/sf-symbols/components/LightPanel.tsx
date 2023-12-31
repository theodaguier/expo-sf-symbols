
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
<g clip-path="url(#clip0_2207_34982)">
<path d="M3.75537 25.002H25.2007C27.6616 25.002 28.8804 23.7832 28.8804 21.3691V6.7207C28.8804 4.30664 27.6616 3.08789 25.2007 3.08789H3.75537C1.30615 3.08789 0.0756836 4.29492 0.0756836 6.7207V21.3691C0.0756836 23.7949 1.30615 25.002 3.75537 25.002ZM3.7788 23.1152C2.60693 23.1152 1.9624 22.4824 1.9624 21.2754V6.81445C1.9624 5.5957 2.60693 4.97461 3.7788 4.97461H25.1773C26.3374 4.97461 26.9937 5.5957 26.9937 6.81445V21.2754C26.9937 22.4824 26.3374 23.1152 25.1773 23.1152H3.7788Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.5874 21.5098H24.3687C25.0249 21.5098 25.3999 21.1231 25.3999 20.4668V7.62305C25.3999 6.95508 25.0249 6.56836 24.3687 6.56836H4.5874C3.93115 6.56836 3.56787 6.95508 3.56787 7.62305V20.4668C3.56787 21.1231 3.93115 21.5098 4.5874 21.5098ZM5.41943 19.9746C5.20849 19.9746 5.10302 19.8691 5.10302 19.6582V8.43164C5.10302 8.20898 5.20849 8.10351 5.41943 8.10351H23.5366C23.7593 8.10351 23.8648 8.20898 23.8648 8.43164V19.6582C23.8648 19.8691 23.7593 19.9746 23.5366 19.9746H5.41943Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34982">
<rect width="28.8047" height="21.9258" fill="currentColor" transform="translate(0.0756836 3.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LightPanel = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
