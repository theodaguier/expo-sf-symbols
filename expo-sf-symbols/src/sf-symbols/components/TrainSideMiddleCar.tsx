
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35806)">
<path d="M0.0146484 20.1562C0.0146484 22.5468 1.22168 23.7422 3.64746 23.7422H25.5966C28.0224 23.7422 29.2294 22.5468 29.2294 20.1562V8.73047C29.2294 6.33984 28.0224 5.14453 25.5966 5.14453H3.64746C1.22168 5.14453 0.0146484 6.33984 0.0146484 8.73047V20.1562ZM4.30371 14.2383V10.6289C4.30371 9.92578 4.72559 9.51562 5.41699 9.51562H23.8271C24.5185 9.51562 24.9404 9.92578 24.9404 10.6289V14.2383C24.9404 14.9063 24.5185 15.3164 23.8271 15.3164H5.41699C4.72559 15.3164 4.30371 14.9063 4.30371 14.2383Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35806">
<rect width="29.2148" height="18.5977" fill="currentColor" transform="translate(0.0146484 5.14453)"/>
</clipPath>
</defs>
</svg>

`;

export const TrainSideMiddleCar = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
