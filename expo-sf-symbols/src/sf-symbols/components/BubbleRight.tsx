
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
<g clip-path="url(#clip0_2207_34598)">
<path d="M19.6316 26.7797C20.4519 26.7797 20.9089 26.1938 20.9089 25.2914V22.2445H21.4714C24.9636 22.2445 26.8386 20.3227 26.8386 16.8774V7.90076C26.8386 4.45545 24.9636 2.53357 21.4714 2.53357H6.37769C2.8855 2.53357 1.0105 4.46716 1.0105 7.90076V16.8774C1.0105 20.3109 2.8855 22.2445 6.37769 22.2445H13.9011L17.9441 25.8422C18.6589 26.475 19.0574 26.7797 19.6316 26.7797ZM19.1511 24.6352L15.4011 20.9086C14.9558 20.4516 14.6277 20.3578 13.9714 20.3578H6.37769C4.02222 20.3578 2.89722 19.1508 2.89722 16.8656V7.90076C2.89722 5.6156 4.02222 4.42029 6.37769 4.42029H21.4714C23.8386 4.42029 24.9519 5.6156 24.9519 7.90076V16.8656C24.9519 19.1508 23.8386 20.3578 21.4714 20.3578H20.03C19.3972 20.3578 19.1511 20.6039 19.1511 21.2367V24.6352Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34598">
<rect width="25.8281" height="25.7461" fill="currentColor" transform="translate(1.0105 1.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
