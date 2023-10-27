
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
<g clip-path="url(#clip0_2207_34686)">
<path d="M3.76807 23.1796H16.354C18.7094 23.1796 20.1157 21.8203 20.1157 19.4648V7.85156C20.1157 5.50782 18.8266 4.14844 16.4711 4.14844H3.76807C1.51807 4.14844 0.00634766 5.50782 0.00634766 7.85156V19.4648C0.00634766 21.8203 1.4126 23.1796 3.76807 23.1796ZM21.7094 17.1211L25.9751 20.8125C26.3735 21.164 26.8422 21.3867 27.2641 21.3867C28.1782 21.3867 28.7758 20.7187 28.7758 19.7578V7.57032C28.7758 6.60938 28.1782 5.94141 27.2641 5.94141C26.8422 5.94141 26.3735 6.16406 25.9751 6.51563L21.7094 10.1953V17.1211Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34686">
<rect width="28.7695" height="19.043" fill="currentColor" transform="translate(0.00634766 4.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VideoFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
