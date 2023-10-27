
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
<g clip-path="url(#clip0_2207_34275)">
<path d="M4.07983 22.5776C4.07983 25.0268 5.28686 26.2456 7.71264 26.2456H20.1579C22.5837 26.2456 23.7907 25.0268 23.7907 22.5776V4.8003C23.7907 2.3628 22.5837 1.12061 20.1579 1.12061H7.71264C5.28686 1.12061 4.07983 2.3628 4.07983 4.8003V22.5776ZM5.96655 22.5425V4.83545C5.96655 3.66358 6.58764 3.00733 7.80639 3.00733H20.0642C21.2829 3.00733 21.904 3.66358 21.904 4.83545V22.5425C21.904 23.7144 21.2829 24.3589 20.0642 24.3589H7.80639C6.58764 24.3589 5.96655 23.7144 5.96655 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.37671 7.81202V19.5659C9.37671 20.3745 9.71655 20.7261 10.5603 20.7261H17.3103C18.154 20.7261 18.4939 20.3745 18.4939 19.5659V7.81202C18.4939 6.9917 18.154 6.65186 17.3103 6.65186H10.5603C9.71655 6.65186 9.37671 6.9917 9.37671 7.81202Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34275">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.07983 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitCenterInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
